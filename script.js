local Http = (syn and syn.request) or http_request or request
local HttpService = game:GetService("HttpService")
local SERVER = "https://YOUR-REPLIT-WEB-VIEW-URL" -- Replace with Replit web view URL

local uid = game.Players.LocalPlayer.UserId
local username = game.Players.LocalPlayer.Name

local function send(endpoint,data)
    return Http({
        Url = SERVER..endpoint,
        Method = "POST",
        Headers={["Content-Type"]="application/json"},
        Body = HttpService:JSONEncode(data)
    })
end

send("/connect",{userid=uid,username=username})
game.Players.LocalPlayer.Chatted:Connect(function()
    send("/chat",{userid=uid})
end)

task.spawn(function()
    while task.wait(0.3) do
        local res = send("/getcommand",{userid=uid})
        local cmd = HttpService:JSONDecode(res.Body).command
        if cmd=="kill" then
            game.Players.LocalPlayer.Character:BreakJoints()
        elseif cmd=="fling" then
            local hrp = game.Players.LocalPlayer.Character.HumanoidRootPart
            hrp.Velocity = Vector3.new(9999,9999,9999)
        elseif cmd=="sit" then
            game.Players.LocalPlayer.Character.Humanoid.Sit = true
        elseif cmd=="freeze" then
            game.Players.LocalPlayer.Character.Humanoid.WalkSpeed = 0
            game.Players.LocalPlayer.Character.Humanoid.JumpPower = 0
        elseif cmd=="unfreeze" then
            game.Players.LocalPlayer.Character.Humanoid.WalkSpeed = 16
            game.Players.LocalPlayer.Character.Humanoid.JumpPower = 50
        elseif cmd=="chat" then
            game.ReplicatedStorage.DefaultChatSystemChatEvents.SayMessageRequest:FireServer("Hello from panel!","All")
        end
    end
end)

game.Players.LocalPlayer.OnTeleport:Connect(function()
    send("/disconnect",{userid=uid})
end)
