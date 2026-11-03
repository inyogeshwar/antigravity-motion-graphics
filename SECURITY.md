# Security Policy

## Supported Versions

| Version | Supported          |
| :------ | :----------------- |
| 1.0.x   | :white_check_mark: |
| < 1.0   | :x:                |

---

## Reporting a Vulnerability

The Antigravity Motion Studio team takes the security of our software seriously. If you discover a security vulnerability, please follow responsible disclosure guidelines.

### How to Report
1. **Do not create a public issue.**
2. Send an email to the repository maintainer or submit a private security advisory on GitHub:
   `https://github.com/inyogeshwar/antigravity-motion-graphics/security/advisories/new`
3. Include detailed steps to reproduce the issue, proof-of-concept scripts, and affected components.

### What to Expect
- **Initial Response:** Within 48 hours acknowledging receipt of your report.
- **Triage & Patch:** We will assess severity and prepare a fix on a private branch.
- **Public Disclosure:** Once a patch is released, we will credit the reporter (unless anonymity is requested).

---

## Security Best Practices for Users
- **Never commit `.env` files** containing live API keys (`CARTESIA_API_KEY`, `HEYGEN_API_KEY`).
- Use environment variables in production workflows.
- Regularly review and update dependencies via `npm audit` and Dependabot PRs.
