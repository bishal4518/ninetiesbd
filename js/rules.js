/* NINETIES — Rules data + renderer. Edit rules here. */
const RULE_GROUPS = [
  ["Respect & Behaviour", [
    ["Be Respectful","Treat everyone with kindness and basic respect."],
    ["No Harassment","Do not target, intimidate, insult, or repeatedly annoy other members."],
    ["No Bullying","Do not deliberately humiliate, isolate, or mistreat other members."],
    ["No Hate Speech","Slurs, hateful remarks, and attacks against protected groups are prohibited."],
    ["Respect Different Opinions","Disagreements are allowed, but personal attacks are not."],
    ["No Unnecessary Drama","Avoid creating conflicts or bringing personal disputes into the server."],
    ["No Trolling or Baiting","Do not intentionally provoke members, arguments or reactions."],
    ["Respect Boundaries","Stop when someone asks you to leave them alone."],
    ["Keep It Friendly","Help maintain a welcoming and comfortable environment for everyone."]]],
  ["Chat & Communication", [
    ["No Spam or Flooding","Do not send repeated or meaningless messages or overwhelm channels."],
    ["No Mention Spam","Avoid excessive user, role, @everyone, or @here mentions. Only ping with a genuine reason."],
    ["Use Channels Properly","Keep discussions relevant to each channel."],
    ["Avoid Excessive Caps","Do not constantly type in all capital letters to disturb others."],
    ["Avoid Reaction Spam","Do not flood messages with unnecessary reactions."],
    ["No Message Copying","Do not repeatedly copy and paste the same content."],
    ["Keep Conversations Readable","Avoid excessive emojis, symbols, or intentionally confusing formatting."],
    ["Communicate Clearly","Use appropriate language and make a reasonable effort to keep conversations understandable."]]],
  ["Safety & Privacy", [
    ["Respect Privacy","Do not share another person's private information without permission."],
    ["No Doxxing","Never expose private information such as addresses, phone numbers, or personal documents."],
    ["No Personal Information Requests","Do not pressure members into revealing sensitive personal information."],
    ["No Unwanted DMs","Do not repeatedly contact members who have asked you to stop."],
    ["No Impersonation","Do not pretend to be another member, staff member, or organisation, or falsely claim staff authority."],
    ["Protect Your Account","Never share passwords, authentication codes, or private account credentials."],
    ["Report Safety Concerns","Contact staff if you encounter serious privacy or safety issues."],
    ["Keep Private Chats Private","Do not publish private messages or personal conversations without permission."]]],
  ["Content Rules", [
    ["Keep It Appropriate","No NSFW, sexually explicit, or otherwise inappropriate content."],
    ["No Disturbing Content","Avoid excessively graphic, disturbing, shocking material or extreme gore."],
    ["No Hate or Threatening Content","Content promoting hatred, discrimination, threats or harm is prohibited."],
    ["No Offensive Material","Do not deliberately post offensive content to provoke others."],
    ["No Dangerous Challenges","Do not encourage members to participate in dangerous activities."],
    ["Keep Media Appropriate","Images, videos, GIFs, stickers, and links must follow the server rules."],
    ["Follow Discord Guidelines","All content must comply with Discord's applicable rules and policies."]]],
  ["Advertising & Promotion", [
    ["No Unauthorised Advertising","Do not advertise without permission, including promoting other Discord servers."],
    ["No Unwanted Self-Promotion","Do not repeatedly promote your own content or projects."],
    ["No DM Advertising","Do not use member DMs to advertise without permission."],
    ["No Hidden Advertising","Do not disguise advertisements as ordinary conversations."],
    ["Use Designated Channels","Only post approved promotions in channels intended for them."],
    ["No Unapproved Partnerships","Do not claim or advertise partnerships without staff approval."],
    ["No Referral Spam","Do not spam referral, affiliate, or invitation links."]]],
  ["Security & Scams", [
    ["No Scams","Fraudulent offers, fake deals, and deceptive schemes are prohibited."],
    ["No Phishing or Malicious Links","Do not share links designed to steal accounts, personal information, or harm devices."],
    ["No Malware or Suspicious Files","Do not distribute viruses, malware, or files that may compromise another member's device."],
    ["No Fake Giveaways","Do not create deceptive giveaways or fake prizes."],
    ["No Account Theft","Do not attempt to obtain another person's account credentials."],
    ["No Fraudulent Transactions","Do not use the server to facilitate fraudulent transactions."],
    ["Do Not Exploit Security Issues","Do not abuse vulnerabilities or security weaknesses to harm the server or its members."],
    ["Report Suspicious Activity","Inform staff when you encounter suspicious links, accounts, or activity."]]],
  ["Bots & Server Features", [
    ["Use Bots Responsibly","Use each bot only for its intended purpose and follow server guidelines."],
    ["No Command Spam","Do not repeatedly run commands unnecessarily."],
    ["No Bot Abuse","Do not intentionally disrupt, overload, or interfere with bots."],
    ["Respect Cooldowns and Permissions","Do not attempt to bypass bot cooldowns, restrictions or assigned permissions."],
    ["No Feature Exploitation","Do not abuse unintended server or bot behaviour."],
    ["No Fake Bot Commands","Do not mislead members with fake bot commands or responses."],
    ["No Automated Spam","Do not use automation to flood channels or members."],
    ["Report Bot Issues","Report serious bugs or unexpected behaviour to staff."]]],
  ["Voice Channels", [
    ["Be Respectful","Treat everyone in voice channels with respect."],
    ["No Mic or Audio Spam","Do not create excessive noise, scream repeatedly, or play loud or repetitive audio."],
    ["No Soundboard Abuse","Do not repeatedly use soundboards to disturb others."],
    ["Respect Private Conversations","Do not intentionally interrupt private conversations."],
    ["Do Not Disrupt Channels","Avoid repeatedly joining and leaving voice channels to disturb members."],
    ["Respect Channel Limits","Follow any limits or restrictions placed on voice channels."],
    ["No Unwanted Recording","Respect the privacy of people participating in voice conversations."]]],
  ["Moderation & Enforcement", [
    ["Listen to Staff","Follow reasonable instructions given by moderators."],
    ["Respect Moderation","Do not intentionally interfere with moderation actions."],
    ["No Staff Harassment","Do not harass, threaten, or repeatedly target staff members."],
    ["No Ban or Punishment Evasion","Do not use alternate accounts to bypass bans, mutes, or other restrictions."],
    ["Report Problems Properly","Use the appropriate reporting method. No false or abusive reports."],
    ["Do Not Backseat Moderate","Leave official moderation decisions to the staff team."]]],
  ["General Rules", [
    ["Follow Server and Discord Rules","All members must follow these rules and Discord's applicable policies."],
    ["Respect Copyright","Do not distribute copyrighted or pirated material without permission."],
    ["No Illegal Content","Do not use the server to share or facilitate illegal content or activities."],
    ["Keep Profiles Appropriate","Usernames, nicknames, avatars, banners, statuses, and bios should follow server standards."],
    ["Use Common Sense","Not every possible situation can be covered by a written rule."],
    ["Do Not Exploit Loopholes","Do not deliberately exploit unclear wording to bypass the intended rules."],
    ["Help Keep the Community Safe","Report serious issues and cooperate when necessary."]]]
];

(function () {
  const root = document.getElementById("rules-root"); if (!root) return;
  const esc = s => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");
  root.innerHTML = RULE_GROUPS.map(([title, rules]) => `
    <div class="acc">
      <button class="acc-btn" type="button" aria-expanded="false">${esc(title)}
        <span class="count-pill">${rules.length} RULES</span><span class="acc-icon" aria-hidden="true"></span></button>
      <div class="acc-panel"><div><ul class="rule-list">
        ${rules.map(([t, d]) => `<li><strong>${esc(t)}</strong>${esc(d)}</li>`).join("")}
      </ul></div></div>
    </div>`).join("");
})();
