[English](README.md) | [简体中文](README.zh-CN.md) | [繁體中文（TW）](README.zh-TW.md) | [日本語](README.ja.md)

# 準繩 Plumbline

[![License: GPL-3.0-or-later](https://img.shields.io/badge/license-GPL--3.0--or--later-blue.svg?style=flat-square)](LICENSE)
![Type: Agent Skill](https://img.shields.io/badge/type-Agent%20Skill-blue.svg?style=flat-square)

<img src="plugins/plumbline/assets/plumbline.png" alt="Plumbline" width="96" height="96">

為 Codex 和 Claude Code 提供以證據為依據的軟體變更驗證。

Plumbline 根據專案既有要求與工具選擇檢查、驗證變更，說明證據支持哪些結論，以及哪些內容仍未驗證。無需額外執行環境或專案設定。

## 安裝

先備妥 Git 與宿主的原生外掛管理器：

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

前置條件、存取權限、更新、移除與獨立 skill 安裝見[安裝說明](INSTALL.md)。

## 使用

在要檢查的專案中開啟新工作階段：

> Codex：用 $plumbline:plumbline 驗證這次變更是否符合專案要求。

> Claude Code：/plumbline:plumbline 驗證這次變更是否符合專案要求。

只需規劃時，註明「制定驗證計畫，先不執行檢查」。報告預設留在對話中，操作仍受專案權限約束；證據缺失、檢查被跳過或證據過期時，對應結果仍屬未驗證。

## 更多

- [產品範圍與狀態](PLAN.md) · [文件](docs/index.md)
- [貢獻與 DCO](CONTRIBUTING.md) · [安全](SECURITY.md)
- [GNU GPL v3.0 或後續版本](LICENSE)（`GPL-3.0-or-later`）
