const licenseChecker = require("license-checker");
const fs = require("fs");

const packageJson = require("./package.json");

const outputFilePath = "licenses.md";

licenseChecker.init(
  {
    start: process.cwd(),
  },
  (err, packages) => {
    if (err) {
      console.error("Error:", err);
      process.exit(1);
    }

    const licenses = [];

    for (const packageName in packages) {
      const packageInfo = packages[packageName];
      const license = packageInfo.licenses || packageInfo.license;

      licenses.push({
        name: packageName,
        license: license || "UNKNOWN",
      });
    }

    const sortedLicenses = licenses.sort((a, b) =>
      a.name.localeCompare(b.name),
    );
    const formattedLicenses = sortedLicenses
      .map((pkg) => `* ${pkg.name}: ${pkg.license}`)
      .join("\n");

    const content = `# Third-Party Licenses\n\n${formattedLicenses}`;

    fs.writeFile(outputFilePath, content, (writeErr) => {
      if (writeErr) {
        console.error("Error writing licenses file:", writeErr);
        process.exit(1);
      }

      console.log(`Licenses file generated: ${outputFilePath}`);
    });
  },
);