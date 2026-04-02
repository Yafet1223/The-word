import { useState, useEffect } from "react";

export default function LandingPage({ onEnter }) {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setTick(1), 80);
    return () => clearTimeout(t);
  }, []);

  const features = [
    { num: "01", icon: "☽", title: "Daily Scripture", desc: "A new verse waits for you every morning. Reflect, absorb, carry it into your day." },
    { num: "02", icon: "◎", title: "Prayer Wall", desc: "Lay your burdens down. Others stand with you, praying — and you can stand for them." },
    { num: "03", icon: "⌘", title: "Faith Circles", desc: "Small, intentional communities. New believers, prayer warriors, youth — find your people." },
  ];

  return (
    <div style={{ background: "#0C1A14", minHeight: "100vh", color: "#EDE8DC", fontFamily: "'Playfair Display', Georgia, serif", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,700;0,900;1,400;1,700&family=DM+Sans:wght@300;400;500&display=swap');
        *{box-sizing:border-box;margin:0;padding:0}

        .lp-nav-item {
          font-family:'DM Sans',sans-serif; font-size:12px; font-weight:400;
          letter-spacing:0.1em; text-transform:uppercase; color:#7A9B84;
          background:none; border:none; cursor:pointer; transition:color 0.2s;
        }
        .lp-nav-item:hover { color:#E8C4A0; }

        .lp-btn {
          font-family:'DM Sans',sans-serif; font-weight:500; font-size:12px;
          letter-spacing:0.08em; text-transform:uppercase; cursor:pointer;
          border-radius:1px; transition:all 0.25s;
        }
        .lp-btn-filled {
          background:#E8C4A0; color:#0C1A14; border:none; padding:14px 36px;
        }
        .lp-btn-filled:hover { background:#F5D9B8; transform:translateY(-2px); }
        .lp-btn-outline {
          background:transparent; color:#7A9B84; border:1px solid #2A4035;
          padding:13px 36px;
        }
        .lp-btn-outline:hover { border-color:#7A9B84; color:#EDE8DC; }

        .lp-fade { opacity:0; transform:translateY(28px); transition:opacity 0.9s cubic-bezier(.16,1,.3,1), transform 0.9s cubic-bezier(.16,1,.3,1); }
        .lp-fade.in { opacity:1; transform:translateY(0); }

        .lp-feat {
          border-top:1px solid #1E3028; padding:40px 0 36px;
          transition:border-color 0.3s;
        }
        .lp-feat:hover { border-top-color:#E8C4A080; }
        .lp-feat:last-child { border-bottom:1px solid #1E3028; }

        .lp-marquee-track {
          display:flex; gap:64px; white-space:nowrap;
          animation: marquee 22s linear infinite;
        }
        @keyframes marquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }

        .lp-test-card {
          background:#0E1E17; border:1px solid #1E3028; border-radius:2px;
          padding:32px 28px; flex-shrink:0; width:320px;
          transition:border-color 0.3s;
        }
        .lp-test-card:hover { border-color:#3A6B4A; }

        .lp-tag {
          font-family:'DM Sans',sans-serif; font-size:10px; font-weight:500;
          letter-spacing:0.12em; text-transform:uppercase;
          color:#3A6B4A; background:#3A6B4A18; border:1px solid #3A6B4A40;
          padding:4px 12px; border-radius:1px;
        }
      `}</style>

      {/* Nav */}
      <nav style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"22px 52px", borderBottom:"1px solid #1A2E22", position:"sticky", top:0, zIndex:100, background:"#0C1A14ee", backdropFilter:"blur(16px)" }}>
        <div style={{ display:"flex", alignItems:"center", gap:10 }}>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <circle cx="11" cy="11" r="10" stroke="#3A6B4A" strokeWidth="1"/>
            <circle cx="11" cy="11" r="4" fill="#E8C4A0"/>
          </svg>
          <span style={{ fontSize:17, fontWeight:700, letterSpacing:"0.05em", color:"#EDE8DC" }}>The Word</span>
        </div>
        <div style={{ display:"flex", gap:40 }}>
          {["Community","Prayer","Scripture"].map(n => <button key={n} className="lp-nav-item">{n}</button>)}
        </div>
        <button className="lp-btn lp-btn-filled" style={{ padding:"10px 22px", fontSize:11 }} onClick={onEnter}>Join Free</button>
      </nav>

      {/* Hero */}
      <section style={{ position:"relative", padding:"110px 52px 100px", maxWidth:1200, margin:"0 auto" }}>
        {/* Decorative circle */}
        <div style={{ position:"absolute", right:80, top:60, width:380, height:380, borderRadius:"50%", border:"1px solid #1E3028", opacity:0.6 }} />
        <div style={{ position:"absolute", right:120, top:100, width:300, height:300, borderRadius:"50%", border:"1px solid #2A4035", opacity:0.4 }} />
        <div style={{ position:"absolute", right:160, top:140, width:220, height:220, borderRadius:"50%", background:"#1A3525", opacity:0.5 }} />

        <div className={`lp-fade ${tick ? "in" : ""}`} style={{ transitionDelay:"0ms", marginBottom:20 }}>
          <span className="lp-tag">Est. in Faith · 2026</span>
        </div>

        <div className={`lp-fade ${tick ? "in" : ""}`} style={{ transitionDelay:"100ms" }}>
          <h1 style={{ fontSize:"clamp(54px,7.5vw,100px)", fontWeight:900, lineHeight:0.95, letterSpacing:"-0.03em", color:"#EDE8DC", maxWidth:700, marginBottom:0 }}>
            Rooted<br/>
            <em style={{ fontStyle:"italic", fontWeight:400, color:"#E8C4A0" }}>in the</em><br/>
            Word.
          </h1>
        </div>

        <div className={`lp-fade ${tick ? "in" : ""}`} style={{ transitionDelay:"220ms", maxWidth:440, marginTop:40 }}>
          <p style={{ fontFamily:"'DM Sans',sans-serif", fontSize:16, fontWeight:300, lineHeight:1.8, color:"#5A7860" }}>
            A quiet place for believers to share scripture, pray together, and grow in community — away from the noise.
          </p>
        </div>

        <div className={`lp-fade ${tick ? "in" : ""}`} style={{ transitionDelay:"340ms", display:"flex", gap:14, marginTop:48 }}>
          <button className="lp-btn lp-btn-filled" onClick={onEnter}>Enter The Word</button>
          <button className="lp-btn lp-btn-outline">Our Story</button>
        </div>

        {/* floating verse card */}
        <div className={`lp-fade ${tick ? "in" : ""}`} style={{
          transitionDelay:"500ms",
          position:"absolute", right:52, bottom:-20,
          background:"#0E1E17", border:"1px solid #2A4035",
          borderRadius:4, padding:"24px 28px", width:280,
        }}>
          <div style={{ fontFamily:"'DM Sans',sans-serif", fontSize:9, letterSpacing:"0.14em", textTransform:"uppercase", color:"#3A6B4A", marginBottom:12 }}>Today's Scripture</div>
          <div style={{ fontSize:16, fontStyle:"italic", fontWeight:400, color:"#EDE8DC", lineHeight:1.6, marginBottom:12 }}>
            "Be still, and know that I am God."
          </div>
          <div style={{ fontFamily:"'DM Sans',sans-serif", fontSize:11, color:"#3A5040" }}>— Psalm 46:10</div>
          <div style={{ marginTop:16, display:"flex", alignItems:"center", gap:8 }}>
            <div style={{ width:28, height:28, borderRadius:"50%", background:"#E8C4A020", border:"1px solid #E8C4A040", display:"flex", alignItems:"center", justifyContent:"center", fontSize:11, color:"#E8C4A0" }}>✦</div>
            <div style={{ fontFamily:"'DM Sans',sans-serif", fontSize:11, color:"#3A5040" }}>1,240 reflections today</div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div style={{ borderTop:"1px solid #1A2E22", borderBottom:"1px solid #1A2E22", padding:"18px 0", overflow:"hidden", marginTop:60 }}>
        <div className="lp-marquee-track">
          {[...Array(2)].map((_, i) => (
            ["Daily Scripture","Prayer Wall","Faith Circles","Growing Together","Community","Reflection","God's Word","Answered Prayer","Daily Scripture","Prayer Wall","Faith Circles","Growing Together"].map((w, j) => (
              <span key={`${i}-${j}`} style={{ fontFamily:"'DM Sans',sans-serif", fontSize:11, letterSpacing:"0.14em", textTransform:"uppercase", color: j % 3 === 1 ? "#E8C4A0" : "#2A4035" }}>{w}</span>
            ))
          ))}
        </div>
      </div>

      {/* Features */}
      <section style={{ padding:"100px 52px", maxWidth:900, margin:"0 auto" }}>
        <div style={{ marginBottom:60 }}>
          <div style={{ fontFamily:"'DM Sans',sans-serif", fontSize:10, letterSpacing:"0.16em", color:"#3A6B4A", textTransform:"uppercase", marginBottom:20 }}>What We Offer</div>
          <h2 style={{ fontSize:"clamp(32px,4vw,52px)", fontWeight:400, lineHeight:1.15, color:"#EDE8DC" }}>
            Everything your faith<br/><em style={{ fontStyle:"italic", color:"#E8C4A0" }}>needs to flourish.</em>
          </h2>
        </div>

        {features.map((f, i) => (
          <div key={i} className="lp-feat">
            <div style={{ display:"flex", alignItems:"flex-start", gap:40 }}>
              <div style={{ fontFamily:"'DM Sans',sans-serif", fontSize:11, color:"#2A4035", fontWeight:500, paddingTop:6, minWidth:24 }}>{f.num}</div>
              <div style={{ fontSize:26, color:"#E8C4A0", paddingTop:2, minWidth:36 }}>{f.icon}</div>
              <div style={{ flex:1 }}>
                <div style={{ fontSize:22, fontWeight:500, color:"#EDE8DC", marginBottom:10 }}>{f.title}</div>
                <div style={{ fontFamily:"'DM Sans',sans-serif", fontSize:14, color:"#4A6854", lineHeight:1.75, maxWidth:500 }}>{f.desc}</div>
              </div>
              <div style={{ fontFamily:"'DM Sans',sans-serif", fontSize:11, color:"#2A4035", paddingTop:6 }}>→</div>
            </div>
          </div>
        ))}
      </section>

      {/* Stats */}
      <section style={{ background:"#0A1610", borderTop:"1px solid #1A2E22", borderBottom:"1px solid #1A2E22", padding:"70px 52px" }}>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", maxWidth:800, margin:"0 auto", gap:0 }}>
          {[["14K+","Believers walking daily"],["83K","Prayers offered this year"],["220+","Active faith circles"]].map(([n,l], i) => (
            <div key={i} style={{ textAlign:"center", padding:"0 32px", borderRight: i < 2 ? "1px solid #1A2E22" : "none" }}>
              <div style={{ fontSize:"clamp(36px,4vw,56px)", fontWeight:900, color:"#E8C4A0", lineHeight:1, marginBottom:10 }}>{n}</div>
              <div style={{ fontFamily:"'DM Sans',sans-serif", fontSize:12, color:"#3A5040", lineHeight:1.5 }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding:"100px 0 80px" }}>
        <div style={{ padding:"0 52px", marginBottom:52 }}>
          <div style={{ fontFamily:"'DM Sans',sans-serif", fontSize:10, letterSpacing:"0.16em", color:"#3A6B4A", textTransform:"uppercase", marginBottom:18 }}>Testimonies</div>
          <h2 style={{ fontSize:"clamp(28px,3.5vw,46px)", fontWeight:400, color:"#EDE8DC" }}>
            Faith <em style={{ fontStyle:"italic", color:"#E8C4A0" }}>in action.</em>
          </h2>
        </div>
        <div style={{ display:"flex", gap:20, paddingLeft:52, overflowX:"auto", paddingBottom:16 }}>
          {[
            { q:"The Word gave me a community I never knew I needed. My faith has never been stronger.", name:"Grace M.", role:"New Believer" },
            { q:"Posting my prayer request felt vulnerable. But the response from strangers brought me to tears.", name:"Abigail F.", role:"Prayer Warrior" },
            { q:"Every morning I open The Word before anything else. It changed my whole outlook on the day.", name:"David K.", role:"Daily Devotion" },
            { q:"Found my circle within days. We study together every week. God is in this thing.", name:"Joshua L.", role:"Bible Study" },
          ].map((t, i) => (
            <div key={i} className="lp-test-card">
              <div style={{ fontSize:28, color:"#1E3028", fontWeight:900, marginBottom:16, lineHeight:1 }}>"</div>
              <p style={{ fontSize:15, fontStyle:"italic", fontWeight:400, color:"#8A9E8A", lineHeight:1.75, marginBottom:24 }}>{t.q}</p>
              <div style={{ fontFamily:"'DM Sans',sans-serif", fontSize:13, color:"#EDE8DC", fontWeight:500 }}>{t.name}</div>
              <div style={{ fontFamily:"'DM Sans',sans-serif", fontSize:10, color:"#3A5040", marginTop:3, letterSpacing:"0.08em", textTransform:"uppercase" }}>{t.role}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding:"120px 52px", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", left:"50%", top:"50%", transform:"translate(-50%,-50%)", width:600, height:600, borderRadius:"50%", border:"1px solid #1E3028", opacity:0.5 }} />
        <div style={{ position:"absolute", left:"50%", top:"50%", transform:"translate(-50%,-50%)", width:400, height:400, borderRadius:"50%", border:"1px solid #2A4035" }} />
        <div style={{ position:"absolute", left:"50%", top:"50%", transform:"translate(-50%,-50%)", width:200, height:200, borderRadius:"50%", background:"#1A3525", opacity:0.7 }} />
        <div style={{ textAlign:"center", position:"relative" }}>
          <div style={{ fontFamily:"'DM Sans',sans-serif", fontSize:10, letterSpacing:"0.16em", color:"#3A6B4A", textTransform:"uppercase", marginBottom:28 }}>Begin Your Journey</div>
          <h2 style={{ fontSize:"clamp(40px,6vw,80px)", fontWeight:900, lineHeight:0.95, letterSpacing:"-0.03em", color:"#EDE8DC", marginBottom:48 }}>
            Your community<br/><em style={{ fontStyle:"italic", fontWeight:400, color:"#E8C4A0" }}>is waiting.</em>
          </h2>
          <button className="lp-btn lp-btn-filled" style={{ fontSize:13, padding:"18px 60px" }} onClick={onEnter}>
            Enter The Word — Free
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop:"1px solid #1A2E22", padding:"36px 52px", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
        <div style={{ display:"flex", alignItems:"center", gap:10 }}>
          <svg width="16" height="16" viewBox="0 0 22 22" fill="none">
            <circle cx="11" cy="11" r="10" stroke="#2A4035" strokeWidth="1"/>
            <circle cx="11" cy="11" r="4" fill="#E8C4A040"/>
          </svg>
          <span style={{ fontFamily:"'DM Sans',sans-serif", fontSize:13, color:"#2A4035" }}>The Word · 2026</span>
        </div>
        <div style={{ fontFamily:"'DM Sans',sans-serif", fontSize:11, color:"#1E3028", letterSpacing:"0.06em" }}>Built in faith. Grown in community.</div>
      </footer>
    </div>
  );
}
