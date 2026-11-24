/* =====================================================
   NINETIES — TEAM DATA  (edit this file only)
   1. Change role counts or descriptions below, OR
   2. Replace a placeholder using TEAM_OVERRIDES at the bottom.
   Photo: put the image in assets/team/ and set photo: "assets/team/name.jpg"
   ===================================================== */

const TEAM_ROLES = [
  { id: "owner",      name: "Owner",            tier: "leadership",  count: 3, desc: "Owns the server and makes the final decisions." },
  { id: "founder",    name: "Founder",          tier: "leadership",  count: 2, desc: "Built NINETIES from the start." },
  { id: "cofounder",  name: "Co-founder",       tier: "leadership",  count: 3, desc: "Helped shape and grow the community." },
  { id: "authority",  name: "Authority",        tier: "leadership",  count: 2, desc: "Senior voices who guide server direction." },
  { id: "admin",      name: "Admin",            tier: "management",  count: 3, desc: "Manage settings, roles, channels and bots." },
  { id: "seniormod",  name: "Senior Moderator", tier: "moderation",  count: 3, desc: "Lead the moderation team and handle serious cases." },
  { id: "moderator",  name: "Moderator",        tier: "moderation",  count: 5, desc: "Keep chats and voice channels friendly and safe." },
  { id: "staff",      name: "Staff",            tier: "support",     count: 7, desc: "Help members, run events and support the team." },
  { id: "crew",       name: "Crew",             tier: "support",     count: 5, more: true, desc: "Newer helpers who keep the community active." }
];

/* Replace placeholders here. Key = role id + "-" + number.
   Example:
   "owner-1": { name: "Redwan", photo: "assets/team/redwan.jpg", bio: "Founder of NINETIES." }
*/

const TEAM_OVERRIDES = {

  /* ===== LEADERSHIP ===== */

  /* Owner (3) */
  "owner-1": { name: "Franklin", photo: "assets/team/owner-1.jpg", bio: "" },
  "owner-2": { name: "Aetheris//", photo: "assets/team/owner-2.jpg", bio: "" },
  "owner-3": { name: "moritonios", photo: "assets/team/owner-3.jpg", bio: "" },

  /* Founder (2) */
  "founder-1": { name: "Water", photo: "assets/team/founder-1.jpg", bio: "" },
  "founder-2": { name: "XE N O N", photo: "assets/team/founder-2.jpg", bio: "" },

  /* Co-founder (3) */
  "cofounder-1": { name: "Lynx", photo: "assets/team/cofounder-1.jpg", bio: "" },
  "cofounder-2": { name: "Moonaieem", photo: "assets/team/cofounder-2.jpg", bio: "" },
  /* "cofounder-3": { name: "Name", photo: "assets/team/cofounder-3.jpg", bio: "" }, */

  /* Authority (2) */
  "authority-1": { name: "Bilai", photo: "assets/team/authority-1.jpg", bio: "" },
  "authority-2": { name: "Randomized", photo: "assets/team/authority-2.jpg", bio: "" },

  /* ===== MANAGEMENT ===== */

  /* Admin (3) */
  "admin-1": { name: "Clash", photo: "assets/team/admin-1.jpg", bio: "" },
  "admin-2": { name: "Light", photo: "assets/team/admin-2.jpg", bio: "" },
  "admin-3": { name: "Nightkiller", photo: "assets/team/admin-3.jpg", bio: "" },

  /* ===== MODERATION ===== */

  /* Senior Moderator (3) */
  /* "seniormod-1": { name: "Name", photo: "assets/team/seniormod-1.jpg", bio: "" }, */
  /* "seniormod-2": { name: "Name", photo: "assets/team/seniormod-2.jpg", bio: "" }, */
  /* "seniormod-3": { name: "Name", photo: "assets/team/seniormod-3.jpg", bio: "" }, */

  /* Moderator (5) */
  /* "moderator-1": { name: "Name", photo: "assets/team/moderator-1.jpg", bio: "" }, */
  /* "moderator-2": { name: "Name", photo: "assets/team/moderator-2.jpg", bio: "" }, */
  "moderator-3": { name: "Midnightwolf", photo: "assets/team/moderator-3.jpg", bio: "" },
  /* "moderator-4": { name: "Name", photo: "assets/team/moderator-4.jpg", bio: "" }, */
  /* "moderator-5": { name: "Name", photo: "assets/team/moderator-5.jpg", bio: "" }, */

  /* ===== SUPPORT ===== */

  /* Staff (7) */
  /* "staff-1": { name: "Name", photo: "assets/team/staff-1.jpg", bio: "" }, */
  /* "staff-2": { name: "Name", photo: "assets/team/staff-2.jpg", bio: "" }, */
  /* "staff-3": { name: "Name", photo: "assets/team/staff-3.jpg", bio: "" }, */
  /* "staff-4": { name: "Name", photo: "assets/team/staff-4.jpg", bio: "" }, */
  /* "staff-5": { name: "Name", photo: "assets/team/staff-5.jpg", bio: "" }, */
  /* "staff-6": { name: "Name", photo: "assets/team/staff-6.jpg", bio: "" }, */
  /* "staff-7": { name: "Name", photo: "assets/team/staff-7.jpg", bio: "" }, */

  /* Crew (5+) */
  /* "crew-1": { name: "Name", photo: "assets/team/crew-1.jpg", bio: "" }, */
  /* "crew-2": { name: "Name", photo: "assets/team/crew-2.jpg", bio: "" }, */
  /* "crew-3": { name: "Name", photo: "assets/team/crew-3.jpg", bio: "" }, */
  /* "crew-4": { name: "Name", photo: "assets/team/crew-4.jpg", bio: "" }, */
  /* "crew-5": { name: "Name", photo: "assets/team/crew-5.jpg", bio: "" }, */

};
