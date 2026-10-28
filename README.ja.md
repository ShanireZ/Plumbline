# Plumbline

[![License: GPL-3.0](https://img.shields.io/badge/license-GPL--3.0-blue.svg?style=flat-square)](LICENSE)
![Type: Agent Skill](https://img.shields.io/badge/type-Agent%20Skill-blue.svg?style=flat-square)

<img src="plugins/plumbline/assets/plumbline.png" alt="Plumbline" width="96" height="96">

[English](README.md) | [简体中文](README.zh-CN.md) | [繁體中文(TW)](README.zh-TW.md) | [日本語](README.ja.md)

さまざまな AI コーディングツールで、根拠に基づいてソフトウェアの変更を検証するスキルです。

プロジェクトの既存の要件とツールに合わせてチェックを選び、変更を検証し、確認できた点と未検証の点を報告します。追加の実行環境やプロジェクト設定は不要です。

## インストール

Git とホストの標準プラグインマネージャーを用意します。

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

前提条件、アクセス権、更新、削除、スキル単体のインストールは[インストール手順](INSTALL.md)を参照してください。

## 使い方

検証するプロジェクトで新しいセッションを開始します。

> Codex：$plumbline:plumbline を使って、この変更がプロジェクトの要件を満たすか検証してください。

> Claude Code：/plumbline:plumbline この変更がプロジェクトの要件を満たすか検証してください。

計画だけが必要な場合は「チェックを実行せず、検証計画を立ててください」と指定します。報告は原則として会話内に残り、操作にはプロジェクトの権限が適用されます。根拠の不足、チェックのスキップ、古い結果がある項目は未検証として扱います。

## 関連情報

- [製品の範囲と状況](PLAN.md) · [ドキュメント](docs/index.md)
- [貢献と DCO](CONTRIBUTING.md) · [セキュリティ](SECURITY.md)
- [GNU GPL v3.0](LICENSE)(`GPL-3.0-only`) · [プロジェクトのライセンス表記](NOTICE)

コミュニティ：[LINUX DO](https://linux.do/)。
