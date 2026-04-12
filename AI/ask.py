import sys
import json
from agent import run_agent_silent

if __name__ == "__main__":
    if len(sys.argv) > 1:
        goal = sys.argv[1]
        try:
            res = run_agent_silent(goal)
            print(json.dumps({"success": True, "response": res}))
        except Exception as e:
            print(json.dumps({"success": False, "error": str(e)}))
    else:
        print(json.dumps({"success": False, "error": "No prompt provided"}))
