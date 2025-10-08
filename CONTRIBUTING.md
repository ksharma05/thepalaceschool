# Contributing to The Palace School Website

## Development Workflow

### 1. Setting Up the Repository

```bash
# Clone the repository
git clone <repository-url>
cd the-palace-school

# Install dependencies
npm install

# Start development servers
npm run dev
```

### 2. Branch Strategy

We use **Git Flow** for branch management:

- `main` - Production-ready code
- `develop` - Integration branch for features
- `feature/*` - New features
- `hotfix/*` - Critical production fixes
- `release/*` - Release preparation

### 3. Making Changes

1. **Create a feature branch:**
   ```bash
   git checkout develop
   git pull origin develop
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes:**
   - Follow the coding standards
   - Write clear, descriptive commit messages
   - Test your changes thoroughly

3. **Commit your changes:**
   ```bash
   git add .
   git commit -m "feat(component): add new feature description"
   ```

4. **Push and create a Pull Request:**
   ```bash
   git push origin feature/your-feature-name
   ```

### 4. Commit Message Format

We use **Conventional Commits**:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

**Types:**
- `feat`: New features
- `fix`: Bug fixes
- `docs`: Documentation changes
- `style`: Code style changes
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

**Examples:**
```
feat(auth): add JWT authentication system
fix(contact): resolve form submission validation
docs(readme): update installation instructions
```

### 5. Code Standards

- Use TypeScript for type safety
- Follow ESLint and Prettier configurations
- Write meaningful variable and function names
- Add comments for complex logic
- Ensure responsive design for all components

### 6. Testing

- Test all new features thoroughly
- Ensure existing functionality still works
- Test on multiple devices and browsers
- Verify dark mode compatibility

### 7. Pull Request Process

1. Ensure your branch is up to date with `develop`
2. Create a descriptive PR title and description
3. Include screenshots for UI changes
4. Request review from team members
5. Address any feedback before merging

### 8. Deployment

- All changes to `main` branch trigger automatic deployment
- Test thoroughly in development environment first
- Coordinate with team for major releases

## Getting Help

If you need help or have questions:
- Check the documentation in `/docs`
- Review existing issues on GitHub
- Contact the development team

## Code of Conduct

- Be respectful and inclusive
- Help others learn and grow
- Focus on constructive feedback
- Maintain a positive environment
