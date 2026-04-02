import { useState } from "react";

const TABS = ["Feed", "Prayer Wall", "Community"];
const VERSE_TAGS = ["#faith","#grace","#hope","#love","#wisdom","#peace","#strength"];

const AVATARS = {
  GM:"#4A8B5C", DK:"#7A5C3A", MT:"#5C4A8B", JL:"#8B5C4A",
  AF:"#3A7A5C", SO:"#5C8B3A", NR:"#8B3A5C", ME:"#E8C4A0"
};

const samplePosts = [
  { id:1, user:"Grace M.", av:"GM", verse:"Philippians 4:13", reflection:"I can do all things through Christ who strengthens me. Needed this reminder today.", tag:"#strength", time:"2m ago", prayers:14 },
  { id:2, user:"David K.", av:"DK", verse:"Psalm 23:1", reflection:"The Lord is my shepherd, I lack nothing. Rest in that promise today.", tag:"#peace", time:"18m ago", prayers:32 },
  { id:3, user:"Miriam T.", av:"MT", verse:"Romans 8:28", reflection:"All things work together for good. Even the hard seasons.", tag:"#faith", time:"1h ago", prayers:7 },
  { id:4, user:"Joshua L.", av:"JL", verse:"Isaiah 40:31", reflection:"Those who wait on the Lord shall renew their strength. Still waiting. Still trusting.", tag:"#hope", time:"3h ago", prayers:21 },
];

const samplePrayers = [
  { id:1, user:"Abigail F.", av:"AF", request:"Please pray for my mother's surgery tomorrow. Trusting God for a full recovery.", time:"5m ago", praying:38 },
  { id:2, user:"Samuel O.", av:"SO", request:"Struggling with anxiety at work. Pray for peace and clarity.", time:"42m ago", praying:17 },
  { id:3, user:"Naomi R.", av:"NR", request:"Grateful for answered prayer! My son got into university. God is faithful.", time:"2h ago", praying:54 },
];

const circles = [
  { name:"New Believers", members:124, icon:"☽", accent:"#E8C4A0" },
  { name:"Daily Devotion", members:341, icon:"◎", accent:"#7A9B84" },
  { name:"Youth & Faith", members:89, icon:"⌘", accent:"#C4A07A" },
  { name:"Prayer Warriors", members:217, icon:"✦", accent:"#9B84A0" },
];

function Avatar({ initials, size = 36 }) {
  const bg = AVATARS[initials] || "#3A6B4A";
  return (
    <div style={{
      width:size, height:size, borderRadius:"50%",
      background: bg + "25", border:`1px solid ${bg}60`,
      display:"flex", alignItems:"center", justifyContent:"center",
      fontFamily:"'Playfair Display',serif", fontWeight:700,
      fontSize: size * 0.32, color:bg, flexShrink:0,
    }}>{initials}</div>
  );
}

function Pill({ label }) {
  return (
    <span style={{
      fontFamily:"'DM Sans',sans-serif", fontSize:9, fontWeight:500,
      letterSpacing:"0.12em", textTransform:"uppercase",
      color:"#E8C4A0", background:"#E8C4A015",
      border:"1px solid #E8C4A030",
      padding:"3px 10px", borderRadius:1,
    }}>{label}</span>
  );
}

function PostCard({ post }) {
  const [prayed, setPrayed] = useState(false);
  return (
    <div style={{
      background:"#0E1E17", borderRadius:2,
      border:"1px solid #1E3028", padding:"20px 22px", marginBottom:10,
      transition:"border-color 0.2s",
    }}
      onMouseEnter={e=>e.currentTarget.style.borderColor="#3A6B4A50"}
      onMouseLeave={e=>e.currentTarget.style.borderColor="#1E3028"}
    >
      <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:14 }}>
        <Avatar initials={post.av} />
        <div style={{ flex:1 }}>
          <div style={{ fontFamily:"'Playfair Display',serif", fontWeight:600, fontSize:13, color:"#C8C0B0" }}>{post.user}</div>
          <div style={{ fontFamily:"'DM Sans',sans-serif", fontSize:10, color:"#2A4035", marginTop:1 }}>{post.time}</div>
        </div>
        <Pill label={post.tag} />
      </div>

      <div style={{
        background:"#0A1610", borderRadius:2,
        padding:"14px 16px", marginBottom:12,
        borderLeft:"2px solid #E8C4A0",
      }}>
        <div style={{ fontFamily:"'DM Sans',sans-serif", fontSize:9, letterSpacing:"0.12em", color:"#E8C4A050", textTransform:"uppercase", marginBottom:5 }}>Scripture</div>
        <div style={{ fontFamily:"'Playfair Display',serif", fontSize:16, fontStyle:"italic", fontWeight:400, color:"#EDE8DC" }}>{post.verse}</div>
      </div>

      <p style={{ fontFamily:"'DM Sans',sans-serif", fontSize:13, color:"#4A6854", lineHeight:1.75, margin:"0 0 14px" }}>{post.reflection}</p>

      <button onClick={()=>setPrayed(!prayed)} style={{
        fontFamily:"'DM Sans',sans-serif", fontSize:11, fontWeight:500,
        letterSpacing:"0.06em", cursor:"pointer", borderRadius:1,
        padding:"6px 14px", transition:"all 0.2s",
        background: prayed ? "#E8C4A015" : "transparent",
        color: prayed ? "#E8C4A0" : "#2A4035",
        border: `1px solid ${prayed ? "#E8C4A030" : "#1E3028"}`,
      }}>
        🙏 {prayed ? "Praying" : "Pray"} · {post.prayers + (prayed ? 1 : 0)}
      </button>
    </div>
  );
}

function PrayerCard({ prayer }) {
  const [praying, setPraying] = useState(false);
  return (
    <div style={{
      background:"#0E1E17", borderRadius:2,
      border:"1px solid #1E3028", padding:"18px 20px", marginBottom:10,
    }}>
      <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:12 }}>
        <Avatar initials={prayer.av} />
        <div>
          <div style={{ fontFamily:"'Playfair Display',serif", fontWeight:600, fontSize:13, color:"#C8C0B0" }}>{prayer.user}</div>
          <div style={{ fontFamily:"'DM Sans',sans-serif", fontSize:10, color:"#2A4035" }}>{prayer.time}</div>
        </div>
      </div>
      <p style={{ fontFamily:"'DM Sans',sans-serif", fontSize:13, color:"#4A6854", lineHeight:1.75, margin:"0 0 14px" }}>{prayer.request}</p>
      <button onClick={()=>setPraying(!praying)} style={{
        fontFamily:"'DM Sans',sans-serif", fontSize:11, fontWeight:500,
        letterSpacing:"0.06em", cursor:"pointer", borderRadius:1,
        padding:"6px 14px", transition:"all 0.2s",
        background: praying ? "#3A6B4A20" : "transparent",
        color: praying ? "#7A9B84" : "#2A4035",
        border: `1px solid ${praying ? "#3A6B4A50" : "#1E3028"}`,
      }}>
        🙏 {praying ? "Praying" : "Pray for this"} · {prayer.praying + (praying ? 1 : 0)}
      </button>
    </div>
  );
}

function Modal({ onClose, onSubmit }) {
  const [verse, setVerse] = useState("");
  const [ref, setRef] = useState("");
  const [tag, setTag] = useState(VERSE_TAGS[0]);
  const inp = { width:"100%", padding:"11px 13px", borderRadius:1, border:"1px solid #1E3028", background:"#0A1610", fontFamily:"'DM Sans',sans-serif", color:"#C8C0B0", outline:"none", boxSizing:"border-box", fontSize:13 };
  return (
    <div style={{ position:"fixed", inset:0, background:"rgba(4,8,6,0.9)", display:"flex", alignItems:"center", justifyContent:"center", zIndex:200, padding:20 }}>
      <div style={{ background:"#0E1E17", borderRadius:2, border:"1px solid #2A4035", padding:"30px", width:"100%", maxWidth:460 }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:24 }}>
          <div>
            <div style={{ fontFamily:"'DM Sans',sans-serif", fontSize:9, letterSpacing:"0.16em", color:"#3A6B4A", textTransform:"uppercase", marginBottom:6 }}>Share the Word</div>
            <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:22, fontWeight:400, color:"#EDE8DC" }}>Your Reflection</h2>
          </div>
          <button onClick={onClose} style={{ background:"none", border:"none", color:"#2A4035", fontSize:18, cursor:"pointer" }}>✕</button>
        </div>
        <input placeholder="Scripture (e.g. John 3:16)" value={verse} onChange={e=>setVerse(e.target.value)} style={{ ...inp, fontFamily:"'Playfair Display',serif", marginBottom:10 }} />
        <textarea placeholder="Your reflection..." value={ref} onChange={e=>setRef(e.target.value)} rows={4} style={{ ...inp, resize:"none", lineHeight:1.7, marginBottom:14 }} />
        <div style={{ display:"flex", flexWrap:"wrap", gap:6, marginBottom:20 }}>
          {VERSE_TAGS.map(t => (
            <button key={t} onClick={()=>setTag(t)} style={{
              padding:"4px 11px", borderRadius:1, fontSize:10, cursor:"pointer",
              fontFamily:"'DM Sans',sans-serif", letterSpacing:"0.08em", textTransform:"uppercase",
              border:`1px solid ${tag===t?"#E8C4A0":"#1E3028"}`,
              background: tag===t ? "#E8C4A015" : "transparent",
              color: tag===t ? "#E8C4A0" : "#2A4035",
              transition:"all 0.15s",
            }}>{t}</button>
          ))}
        </div>
        <button onClick={()=>{ if(verse&&ref){ onSubmit({verse,reflection:ref,tag}); onClose(); }}} style={{
          width:"100%", padding:"13px", borderRadius:1,
          background:"#E8C4A0", color:"#0C1A14",
          fontWeight:500, fontSize:12, border:"none", cursor:"pointer",
          fontFamily:"'DM Sans',sans-serif", letterSpacing:"0.1em", textTransform:"uppercase",
        }}>Post Scripture ◎</button>
      </div>
    </div>
  );
}

export default function TheWordApp({ onBack }) {
  const [tab, setTab] = useState("Feed");
  const [posts, setPosts] = useState(samplePosts);
  const [modal, setModal] = useState(false);

  return (
    <div style={{ minHeight:"100vh", background:"#0C1A14", color:"#EDE8DC", fontFamily:"'DM Sans',sans-serif", paddingBottom:90 }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,700;0,900;1,400;1,700&family=DM+Sans:wght@300;400;500&display=swap');
        *{box-sizing:border-box}
      `}</style>

      {/* Header */}
      <div style={{
        background:"#0C1A14ee", borderBottom:"1px solid #1A2E22",
        padding:"14px 20px", position:"sticky", top:0, zIndex:50,
        display:"flex", alignItems:"center", justifyContent:"space-between",
        backdropFilter:"blur(12px)",
      }}>
        <div style={{ display:"flex", alignItems:"center", gap:14 }}>
          <button onClick={onBack} style={{
            background:"none", border:"1px solid #1E3028",
            color:"#3A5040", padding:"5px 12px", borderRadius:1,
            cursor:"pointer", fontSize:10, letterSpacing:"0.08em",
            fontFamily:"'DM Sans',sans-serif", textTransform:"uppercase",
          }}>← Back</button>
          <div style={{ display:"flex", alignItems:"center", gap:8 }}>
            <svg width="18" height="18" viewBox="0 0 22 22" fill="none">
              <circle cx="11" cy="11" r="10" stroke="#3A6B4A" strokeWidth="1"/>
              <circle cx="11" cy="11" r="4" fill="#E8C4A0"/>
            </svg>
            <span style={{ fontFamily:"'Playfair Display',serif", fontSize:17, fontWeight:700, color:"#EDE8DC" }}>The Word</span>
          </div>
        </div>
        <div style={{
          background:"#E8C4A015", border:"1px solid #E8C4A030",
          borderRadius:1, padding:"4px 12px",
          fontSize:10, color:"#E8C4A0", letterSpacing:"0.08em", textTransform:"uppercase",
        }}>🔥 7 Day Streak</div>
      </div>

      {/* Daily verse */}
      <div style={{
        margin:"14px 14px 0",
        background:"#0E1E17", border:"1px solid #1E3028",
        borderLeft:"2px solid #E8C4A0", borderRadius:2, padding:"18px 22px",
      }}>
        <div style={{ fontSize:9, letterSpacing:"0.14em", color:"#E8C4A040", textTransform:"uppercase", marginBottom:8 }}>Today's Verse · April 1</div>
        <div style={{ fontFamily:"'Playfair Display',serif", fontSize:18, fontStyle:"italic", fontWeight:400, color:"#C8C0B0", lineHeight:1.55 }}>
          "Be still, and know that I am God."
        </div>
        <div style={{ fontSize:11, color:"#2A4035", marginTop:6 }}>— Psalm 46:10</div>
      </div>

      {/* Tabs */}
      <div style={{ display:"flex", padding:"14px 14px 0", borderBottom:"1px solid #1A2E22" }}>
        {TABS.map(t => (
          <button key={t} onClick={()=>setTab(t)} style={{
            padding:"7px 18px", border:"none", cursor:"pointer",
            background:"transparent", fontSize:10, fontWeight:500,
            letterSpacing:"0.1em", textTransform:"uppercase",
            fontFamily:"'DM Sans',sans-serif",
            color: tab===t ? "#E8C4A0" : "#2A4035",
            borderBottom:`2px solid ${tab===t ? "#E8C4A0" : "transparent"}`,
            transition:"all 0.15s",
          }}>{t}</button>
        ))}
      </div>

      {/* Content */}
      <div style={{ padding:"14px" }}>
        {tab === "Feed" && (
          <>
            <div style={{ fontSize:9, color:"#1E3028", letterSpacing:"0.1em", textTransform:"uppercase", marginBottom:12 }}>{posts.length} reflections today</div>
            {posts.map(p => <PostCard key={p.id} post={p} />)}
          </>
        )}
        {tab === "Prayer Wall" && (
          <>
            <textarea placeholder="Share a prayer request or testimony..." rows={3} style={{
              width:"100%", padding:"12px 14px", borderRadius:1,
              border:"1px solid #1E3028", background:"#0E1E17",
              fontSize:13, fontFamily:"'DM Sans',sans-serif",
              color:"#4A6854", resize:"none", outline:"none",
              marginBottom:10, lineHeight:1.7,
            }} />
            <button style={{
              background:"#E8C4A0", color:"#0C1A14", border:"none",
              borderRadius:1, padding:"9px 18px", fontSize:10,
              fontWeight:500, cursor:"pointer", fontFamily:"'DM Sans',sans-serif",
              letterSpacing:"0.1em", textTransform:"uppercase", marginBottom:18,
            }}>Post Request</button>
            {samplePrayers.map(p => <PrayerCard key={p.id} prayer={p} />)}
          </>
        )}
        {tab === "Community" && (
          <>
            <div style={{ fontSize:9, color:"#1E3028", letterSpacing:"0.1em", textTransform:"uppercase", marginBottom:12 }}>Faith Circles</div>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10 }}>
              {circles.map(c => (
                <div key={c.name} style={{
                  background:"#0E1E17", borderRadius:2,
                  border:"1px solid #1E3028", padding:"18px 14px",
                  transition:"border-color 0.2s", cursor:"pointer",
                }}
                  onMouseEnter={e=>e.currentTarget.style.borderColor=c.accent+"40"}
                  onMouseLeave={e=>e.currentTarget.style.borderColor="#1E3028"}
                >
                  <div style={{ fontSize:22, color:c.accent, marginBottom:10 }}>{c.icon}</div>
                  <div style={{ fontFamily:"'Playfair Display',serif", fontWeight:600, fontSize:15, color:"#C8C0B0", marginBottom:4 }}>{c.name}</div>
                  <div style={{ fontSize:10, color:"#2A4035", marginBottom:14 }}>{c.members} members</div>
                  <button style={{
                    width:"100%", padding:"6px", borderRadius:1,
                    border:`1px solid ${c.accent}40`, background:"transparent",
                    color:c.accent, fontWeight:500, fontSize:9,
                    cursor:"pointer", fontFamily:"'DM Sans',sans-serif",
                    letterSpacing:"0.1em", textTransform:"uppercase",
                  }}>Join Circle</button>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* FAB */}
      <button onClick={()=>setModal(true)} style={{
        position:"fixed", bottom:22, right:18,
        background:"#E8C4A0", color:"#0C1A14",
        border:"none", borderRadius:1,
        padding:"13px 22px", fontSize:10, fontWeight:500,
        cursor:"pointer", fontFamily:"'DM Sans',sans-serif",
        letterSpacing:"0.1em", textTransform:"uppercase",
        boxShadow:"0 8px 40px rgba(232,196,160,0.2)",
        zIndex:50, transition:"all 0.2s",
      }}>◎ Share Scripture</button>

      {modal && (
        <Modal
          onClose={()=>setModal(false)}
          onSubmit={({verse,reflection,tag})=>{
            setPosts([{ id:posts.length+1, user:"You", av:"ME", verse, reflection, tag, time:"Just now", prayers:0 }, ...posts]);
          }}
        />
      )}
    </div>
  );
}
