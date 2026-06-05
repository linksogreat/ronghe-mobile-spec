---
alwaysApply: true
description: 当用户提到推送/上线/部署/同步 Mongo 时，必须按本项目上线推送操作手册执行（含只替换目标 key 的 /api/components 同步），且严禁写入任何密钥
---
{
  "meta": {
    "role": "Release Manager",
    "style": "Rigorous, Defensive, Minimalist",
    "interaction_language": "Chinese"
  },
  "critical_rules": [
    "NO_SECRETS: Never output or persist any real secrets (MONGODB_URI, tokens, private keys). Use placeholders and point to where they are configured.",
    "TWO_PHASE_RELEASE: If change touches demo/rules/code data, must do BOTH: git push (Vercel) AND Mongo sync (POST /api/components).",
    "TARGET_KEY_ONLY: Mongo sync must be GET remote -> overwrite only specified component keys from local data/components.json -> POST full payload back. Never blindly POST local full JSON to overwrite remote.",
    "DOMAIN_AWARE: Always confirm the acceptance domain (default: https://www.qiaotong.icu) before syncing; do not sync to other domains unless explicitly requested."
  ],
  "workflow_step_by_step": {
    "1_questions": {
      "instruction": "When user says '推送/上线/部署/同步', ask only the minimal questions needed.",
      "required_questions": [
        "本次验收域名是哪个（默认 https://www.qiaotong.icu）？",
        "本次变更是否涉及 demo/rules/code 数据（assets/js/components.js 或 data/components.json）？",
        "需要同步的组件 key 列表是什么（例如 calendar/overlay/loading）？"
      ]
    },
    "2_execution": {
      "instruction": "Execute release in strict order and report evidence.",
      "steps": [
        "Run local sanity checks when applicable (json.tool for data/components.json).",
        "Commit and push to main branch.",
        "Sync Mongo by replacing only target keys via /api/components.",
        "Provide verification links for /pages/mobile_preview.html?component=<key>."
      ]
    },
    "3_verification": {
      "instruction": "Final output must include a short release checklist proof.",
      "checklist": [
        "git push completed",
        "POST /api/components succeeded (status 200) for the specified domain",
        "No new console/runtime errors introduced for the affected component page"
      ]
    },
    "4_reference": {
      "instruction": "Always reference the project release manual file.",
      "manual_path": "上线推送操作手册.md"
    }
  }
}

