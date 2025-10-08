# 🔒 GitHub Branch Protection Setup Guide

This guide explains how to set up branch protection rules for The Palace School repository to ensure code quality and prevent direct pushes to the main branch.

## 🎯 **Branch Protection Rules to Configure**

### **1. Require Pull Request Reviews**
- ✅ Require a pull request before merging
- ✅ Require approvals: **2** (recommended for school projects)
- ✅ Dismiss stale PR approvals when new commits are pushed
- ✅ Require review from code owners (if CODEOWNERS file exists)

### **2. Require Status Checks**
- ✅ Require status checks to pass before merging
- ✅ Require branches to be up to date before merging
- ✅ Required status checks:
  - `client-ci` (Frontend CI)
  - `server-ci` (Backend CI) 
  - `security-audit` (Security Audit)
  - `code-quality` (Code Quality)

### **3. Restrict Pushes to Main Branch**
- ✅ Restrict pushes that create files larger than 100MB
- ✅ Do not allow bypassing the above settings (for administrators)

## 📋 **Step-by-Step Setup Instructions**

### **Step 1: Access Repository Settings**
1. Go to your GitHub repository
2. Click on **Settings** tab
3. Click on **Branches** in the left sidebar

### **Step 2: Add Branch Protection Rule**
1. Click **Add rule** button
2. In **Branch name pattern**, enter: `main`

### **Step 3: Configure Protection Rules**

#### **3.1 Protect Matching Branches**
- ✅ **Require a pull request before merging**
- ✅ **Require approvals** (set to 2)
- ✅ **Dismiss stale PR approvals when new commits are pushed**
- ✅ **Require review from code owners** (optional)

#### **3.2 Restrict Pushes**
- ✅ **Restrict pushes that create files larger than 100MB**

#### **3.3 Require Status Checks**
- ✅ **Require status checks to pass before merging**
- ✅ **Require branches to be up to date before merging**
- ✅ **Required status checks** (select from the list):
  - `client-ci`
  - `server-ci`
  - `security-audit`
  - `code-quality`

#### **3.4 Administrative Override**
- ✅ **Do not allow bypassing the above settings**

### **Step 4: Save the Rule**
1. Click **Create** to save the branch protection rule
2. Verify the rule is active by checking the branch list

## 🔧 **Additional Recommended Settings**

### **Develop Branch Protection**
Create a similar rule for the `develop` branch with:
- ✅ Require pull request reviews (1 approval)
- ✅ Require status checks to pass
- ✅ Allow administrators to bypass (for hotfixes)

### **CODEOWNERS File** (Optional)
Create `.github/CODEOWNERS` file to automatically assign reviewers:

```
# Global owners
* @username1 @username2

# Frontend files
/packages/client/ @frontend-team

# Backend files  
/packages/server/ @backend-team

# Documentation
*.md @documentation-team
```

## ✅ **Verification Steps**

### **Test Pull Request Flow**
1. Create a new branch: `git checkout -b test-branch`
2. Make a small change and commit
3. Push the branch: `git push origin test-branch`
4. Create a pull request to `main`
5. Verify that:
   - Status checks are running
   - PR cannot be merged without approvals
   - Direct pushes to main are blocked

### **Test Direct Push Restriction**
1. Try to push directly to main: `git push origin main`
2. Should be blocked with an error message

## 🚨 **Troubleshooting**

### **Status Checks Not Appearing**
- Ensure the CI workflow file is in `.github/workflows/`
- Check that the workflow runs successfully
- Verify branch protection rule includes the correct status check names

### **PR Reviews Not Required**
- Check that "Require approvals" is set to at least 1
- Verify the reviewer has push access to the repository
- Ensure "Dismiss stale reviews" is enabled

### **Administrator Bypass Issues**
- Check "Do not allow bypassing" is enabled
- Verify administrator permissions in repository settings

## 📊 **Monitoring and Maintenance**

### **Regular Checks**
- Monitor failed status checks and fix CI issues promptly
- Review and update branch protection rules as needed
- Ensure CODEOWNERS file is kept up to date

### **Metrics to Track**
- Average time for PR reviews
- Number of failed status checks
- Direct push attempts (should be 0)

## 🎯 **Benefits of This Setup**

1. **Code Quality**: All changes must pass CI checks
2. **Peer Review**: Multiple eyes on every change
3. **History Integrity**: Clean, reviewable commit history
4. **Security**: No direct pushes to production code
5. **Collaboration**: Structured development workflow
6. **Learning**: Students learn professional development practices

---

## 📚 **Additional Resources**

- [GitHub Branch Protection Documentation](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [CODEOWNERS File Documentation](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners)
