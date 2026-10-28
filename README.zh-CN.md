[English](README.md) | [简体中文](README.zh-CN.md) | [繁體中文（TW）](README.zh-TW.md) | [日本語](README.ja.md)

# 准绳 Plumbline

[![License: GPL-3.0-or-later](https://img.shields.io/badge/license-GPL--3.0--or--later-blue.svg?style=flat-square)](LICENSE)
![Type: Agent Skill](https://img.shields.io/badge/type-Agent%20Skill-blue.svg?style=flat-square)

<img src="plugins/plumbline/assets/plumbline.png" alt="Plumbline" width="96" height="96">

为 Codex 和 Claude Code 提供基于证据的软件变更验证。

Plumbline 根据项目既有要求与工具选择检查、验证变更，说明证据支持哪些结论，以及哪些内容仍未验证。无需额外运行环境或项目配置。

## 安装

先备好 Git 和宿主的原生插件管理器：

**Codex**

```shell
codex plugin marketplace add ShanireZ/Plumbline
codex plugin add plumbline@plumbline-marketplace
```

**Claude Code**

```shell
claude plugin marketplace add ShanireZ/Plumbline
claude plugin install plumbline@plumbline-marketplace --scope user
```

前置条件、访问权限、更新、卸载和独立 skill 安装见[安装说明](INSTALL.md)。

## 使用

在要检查的项目中开启新会话：

> Codex：用 $plumbline:plumbline 验证这次变更是否符合项目要求。

> Claude Code：/plumbline:plumbline 验证这次变更是否符合项目要求。

只需规划时，注明“制定验证计划，先不执行检查”。报告默认留在对话中，操作仍受项目权限约束；证据缺失、检查被跳过或证据过期时，对应结果仍属未验证。

## 更多

- [产品范围与状态](PLAN.md) · [文档](docs/index.md)
- [贡献与 DCO](CONTRIBUTING.md) · [安全](SECURITY.md)
- [GNU GPL v3.0 或后续版本](LICENSE)（`GPL-3.0-or-later`）
