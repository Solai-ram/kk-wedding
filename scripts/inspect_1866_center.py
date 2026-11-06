import json

with open("C:/Users/P S RAM/.gemini/antigravity/brain/934ef351-e36f-4c0e-97f9-b9198a531239/.system_generated/logs/transcript_full.jsonl", "r", encoding="utf-8") as f:
    for line in f:
        data = json.loads(line)
        step = data.get("step_index")
        if step == 1866:
            calls = data.get("tool_calls", [])
            for c in calls:
                content = c.get("args", {}).get("Content", "")
                idx = content.find("CENTER ROYAL")
                if idx != -1:
                    print(content[idx:idx+2500])

