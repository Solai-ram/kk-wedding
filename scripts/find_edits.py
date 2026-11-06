import json

with open("C:/Users/P S RAM/.gemini/antigravity/brain/934ef351-e36f-4c0e-97f9-b9198a531239/.system_generated/logs/transcript_full.jsonl", "r", encoding="utf-8") as f:
    for line in f:
        data = json.loads(line)
        step = data.get("step_index")
        calls = data.get("tool_calls", [])
        for c in calls:
            args = str(c.get("args", ""))
            if "OpeningScreen.tsx" in args and ("write_file" in c.get("name", "") or "edit_file" in c.get("name", "")):
                print("Step", step, c.get("name"))

