# 準繩 Plumbline 中文入口

[![License: GPL-3.0-or-later](https://img.shields.io/badge/license-GPL--3.0--or--later-blue.svg?style=flat-square)](LICENSE)
![類型：Agent Skill](https://img.shields.io/badge/type-Agent%20Skill-blue.svg?style=flat-square)

<img src="plugins/plumbline/assets/plumbline.png" alt="Plumbline" width="96" height="96">

準繩 Plumbline 協助 Agent 依據專案既有規範，選擇適當檢查、取得可追溯證據，並準確說明軟體變更的完成程度。

## 安裝與使用

先備妥 Codex 或 Claude Code 與 Git，再將本儲存庫加入自訂市場，使用宿主的原生管理器安裝。

Codex CLI：

```shell
codex plugin marketplace add ShanireZ/Plumbline
codex plugin add plumbline@plumbline-marketplace
codex plugin list --marketplace plumbline-marketplace --json
```

Claude Code CLI：

```shell
claude plugin marketplace add ShanireZ/Plumbline
claude plugin install plumbline@plumbline-marketplace --scope user
claude plugin details plumbline@plumbline-marketplace
```

前置條件、宿主介面、本機來源、獨立 skill、更新、移除及疑難排解見 [安裝說明](INSTALL.md)。上述命令使用本儲存庫的自訂市場。
遠端交付狀態與實測範圍只記在 [PLAN.md](PLAN.md)；私有儲存庫需要既有 Git 存取權。

兩種宿主共用同一份 [skill](plugins/plumbline/skills/plumbline/SKILL.md)。安裝外掛並開啟新工作階段後，可以提出：

> Codex：用 $plumbline:plumbline 驗證這次修改是否符合專案要求。

> Claude Code：/plumbline:plumbline 制定這個需求的驗證方式，先不要執行。

流程包含確認範圍、對應驗收與檢查、執行現有工具、確認證據仍然適用，以及報告結果與缺口。目標專案不必新增執行環境、設定檔、服務或其他 skill。外掛只提供宿主原生安裝中繼資料；仍可單獨安裝 skill，以 `$plumbline` 呼叫。儲存庫裡有套件不代表已安裝或註冊到 Agent。

## 結果的意義

「已驗證、失敗、未驗證、待批准、不適用」是附帶實際觀察的逐項判斷。必要證據缺失、被跳過、已過期或互相矛盾時，不能宣稱驗收全部完成。

Skill 遵循目標專案的規範與權限，不授予額外操作權限，不提供安全隔離或正確性證明，也不產生舊框架的 `PASS`。報告預設留在對話，需要保存時沿用專案慣例，不自動上傳。

## 閱讀入口

- [`PLAN.md`](PLAN.md)：唯一的目前狀態、產品範圍、驗收條件與決策權威。
- [`README.md`](README.md)：英文權威入口。
- [`docs/index.md`](docs/index.md)：權威、貢獻與專案指南導覽。
- [`tests/skill/README.md`](tests/skill/README.md)：本機隔離情境驗證。

英文產品規範與 skill 指引為權威；中文入口提供說明，不另維護完整規格。

## License

Plumbline 採用 [GNU General Public License v3.0](LICENSE) 或其後續版本（`GPL-3.0-or-later`）。
