# Contributing to Uptick Talent LMS (Flutter)

Thank you for your interest in contributing! 🎉  
This document outlines the contribution workflow, coding standards, and development setup for the **Uptick Talent LMS Flutter** project.

Our goal is to make the process smooth and consistent for everyone — whether you’re fixing a bug, adding a feature, or improving documentation.

---

### Prerequisites

Make sure you have the following installed:

- **Flutter SDK:** `>=3.0.0`
- **Dart SDK:** `>=3.0.0`
- **Git**
- **Android Studio** or **VS Code** (with Flutter/Dart extensions)

### Setup Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/upticktalent/uptick-talent-lms.git
   cd uptick-talent-lms/mobile
   ```

2. **Install dependencies**

   ```bash
   flutter pub get
   ```

3. **Run the app**

   ```bash
   flutter run
   ```

4. **Build for production**
   ```bash
   flutter build apk
   ```

---

## Branch Naming Convention

Use descriptive branch names following this structure:

| Type       | Description                 | Example                       |
| ---------- | --------------------------- | ----------------------------- |
| `feature/` | New feature implementation  | `feature/add-login-screen`    |
| `fix/`     | Bug fix or patch            | `fix/auth-token-refresh`      |
| `chore/`   | Maintenance or minor update | `chore/update-dependencies`   |
| `docs/`    | Documentation update        | `docs/add-contributing-guide` |
| `test/`    | Testing                     | `test/widget test for auth`   |

---

## 📝 Commit Message Guidelines

We follow the **Conventional Commits** format for clarity and consistency.

**Format:**

```
<type>(scope): <short summary>
```

**Examples:**

```
feat(auth): implement user login API
fix(ui): correct button alignment in dashboard
chore: update Flutter dependencies
docs: add README setup instructions
```

**Allowed Types:**

- `feat` — New feature
- `fix` — Bug fix
- `chore` — Maintenance or configuration changes
- `docs` — Documentation changes
- `refactor` — Code improvement without new features
- `test` — Adding or updating tests

---

## Code Quality Standards

Before committing or pushing your changes, run the following checks:

### Lint and Format

```bash
flutter analyze
dart format .
```

### Run Tests

```bash
flutter test
```

Ensure **all tests pass** before opening a pull request.

---

## Pull Request (PR) Process

1. Ensure your branch is **up to date** with `main`:

   ```bash
   git pull origin main
   ```

2. Commit and push your changes:

   ```bash
   git add .
   git commit -m "feat(auth): add login UI"
   git push origin feature/add-login-ui
   ```

3. Open a Pull Request (PR) on GitHub:

   - Base branch: `main`
   - Compare branch: your feature branch
   - Fill in PR title and description clearly.

4. Before requesting review:

   - Code is formatted and lint-free
   - Tests pass successfully
   - PR description explains the change clearly

5. Wait for at least **one code review approval** before merging.

---

## Issue Reporting

If you find a bug or want to request a feature:

1. Go to the **Issues** tab in the repository.
2. Choose the correct template (Bug Report or Feature Request).
3. Include:
   - A clear **title**
   - **Steps to reproduce** the issue
   - **Expected vs. actual behavior**
   - Screenshots (if applicable)
   - Device or OS info (Android/iOS version)

---

## Code of Conduct

Please note that this project follows a [Code of Conduct](../CODE_OF_CONDUCT.md).  
By participating, you agree to uphold this standard in all interactions.

---

## Need Help?

If you get stuck:

- Check the **README.md** for setup and build instructions
- Reach out via the team’s Slack or GitHub Discussions
- Or mention a maintainer in your PR for guidance

---

### Thank You for Contributing!

Your time and effort make this project better for everyone.  
Let’s build something amazing together
