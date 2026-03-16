import React, { useEffect, useState } from 'react';
import { client } from './contentful';
import './App.css';

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-content neo-card" style={{ backgroundColor: 'var(--neo-accent-2)' }}>
        <h2 style={{ fontSize: '4rem', textTransform: 'uppercase', marginBottom: '1rem', lineHeight: '1' }}>Parfum Berkarakter<br/>Untuk Pria Sejati.</h2>
        <p style={{ fontSize: '1.25rem', marginBottom: '2rem', fontWeight: '600' }}>Beda dari yang lain. Tampil memukau, tinggalkan jejak yang tak terlupakan.</p>
        <a href="#products" className="neo-button">Lihat Koleksi Kami <i className="fa-solid fa-arrow-down"></i></a>
      </div>
      <div className="hero-image">
        {/* Placeholder for Neobrutalist Perfume image */}
        <div className="dummy-image neo-card" style={{ backgroundColor: 'var(--neo-accent-1)', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <h3 style={{ transform: 'rotate(-10deg)', fontSize: '2rem' }}>[GAMBAR PARFUM NEOBRUTALISM]</h3>
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section className="why-section neo-card" style={{ backgroundColor: '#fff' }}>
      <h2 style={{ fontSize: '3rem', marginBottom: '2rem', textTransform: 'uppercase', borderBottom: 'var(--neo-border)', paddingBottom: '1rem' }}>Kenapa Harus Men Parfume?</h2>
      <div className="features" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
        <div className="feature neo-card" style={{ backgroundColor: 'var(--neo-bg)' }}>
          <i className="fa-solid fa-bolt" style={{ fontSize: '3rem', marginBottom: '1rem' }}></i>
          <h3>Karakter Kuat</h3>
          <p>Diformulasikan khusus untuk menonjolkan aura maskulin Anda.</p>
        </div>
        <div className="feature neo-card" style={{ backgroundColor: 'var(--neo-accent-2)' }}>
          <i className="fa-solid fa-clock" style={{ fontSize: '3rem', marginBottom: '1rem' }}></i>
          <h3>Tahan Lama</h3>
          <p>Wangi menempel seharian, siap menemani aktivitas padatmu.</p>
        </div>
        <div className="feature neo-card" style={{ backgroundColor: 'var(--neo-accent-1)' }}>
          <i className="fa-solid fa-gem" style={{ fontSize: '3rem', marginBottom: '1rem' }}></i>
          <h3>Beda Dari Yang Lain</h3>
          <p>Aroma eksklusif yang tidak pasaran. Be unique.</p>
        </div>
      </div>
    </section>
  );
}

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client.getEntries({ content_type: 'parfumes' })
      .then((response) => {
        setProducts(response.items);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  return (
    <section id="products" className="products-section neo-card" style={{ backgroundColor: 'var(--neo-bg)' }}>
      <h2 style={{ fontSize: '3rem', marginBottom: '2rem', textTransform: 'uppercase' }}>Koleksi Kami</h2>
      {loading ? (
        <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Loading produk...</p>
      ) : products.length > 0 ? (
        <div className="product-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {products.map((item) => (
             <div key={item.sys.id} className="product-card neo-card" style={{ backgroundColor: '#fff', display: 'flex', flexDirection: 'column' }}>
                <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>{item.fields.name || 'Unnamed Perfume'}</h3>
                    <p style={{ marginBottom: '1rem' }}>{item.fields.description || 'Deskripsi tidak tersedia.'}</p>
                    {item.fields.price && <p style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Rp {item.fields.price.toLocaleString('id-ID')}</p>}
                </div>
                <a href={`https://wa.me/6287778086123?text=Halo%20saya%20mau%20pesan%20${item.fields.name}`} target="_blank" rel="noreferrer" className="neo-button" style={{ textAlign: 'center', marginTop: 'auto' }}>
                    Pesan Sekarang <i className="fa-brands fa-whatsapp"></i>
                </a>
             </div>
          ))}
        </div>
      ) : (
        <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Belum ada produk yang tersedia.</p>
      )}
    </section>
  );
}

function SocialProof() {
    return (
        <section className="proof-section neo-card" style={{ backgroundColor: 'var(--neo-accent-1)' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '2rem', textTransform: 'uppercase' }}>Kata Mereka</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                <div className="neo-card" style={{ backgroundColor: '#fff' }}>
                    <p style={{ fontSize: '1.25rem', fontStyle: 'italic', marginBottom: '1rem' }}>"Parfum ini beneran beda! Wanginya gahar tapi elegan."</p>
                    <p style={{ fontWeight: 'bold' }}>- Budi, Jakarta</p>
                </div>
                <div className="neo-card" style={{ backgroundColor: '#fff' }}>
                    <p style={{ fontSize: '1.25rem', fontStyle: 'italic', marginBottom: '1rem' }}>"Satu kali semprot awet seharian. Mantap jiwa."</p>
                    <p style={{ fontWeight: 'bold' }}>- Andi, Bandung</p>
                </div>
            </div>
        </section>
    )
}

function CTA() {
    return (
        <section className="cta-section neo-card" style={{ backgroundColor: 'var(--neo-black)', color: 'var(--neo-white)', textAlign: 'center' }}>
            <h2 style={{ fontSize: '4rem', marginBottom: '1rem', textTransform: 'uppercase', color: 'var(--neo-accent-2)' }}>Siap Tampil Beda?</h2>
            <p style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Jangan tunda lagi. Dapatkan karaktermu sekarang.</p>
            <a href="https://wa.me/6287778086123?text=Halo%20saya%20tertarik%20dengan%20Men%20Parfume" target="_blank" rel="noreferrer" className="neo-button" style={{ fontSize: '2rem', padding: '1.5rem 3rem' }}>
                <i className="fa-brands fa-whatsapp"></i> Chat WhatsApp Sekarang!
            </a>
        </section>
    )
}

function App() {
  return (
    <div className="app-container">
      <header className="brutal-header">
        <h1>MEN PARFUME</h1>
      </header>
      <main>
        <Hero />
        <WhyUs />
        <ProductList />
        <SocialProof />
        <CTA />
      </main>
      <footer style={{ borderTop: 'var(--neo-border)', paddingTop: '2rem', paddingBottom: '2rem', textAlign: 'center', fontWeight: 'bold', fontSize: '1.25rem' }}>
          <p>&copy; {new Date().getFullYear()} Men Parfume. Neobrutalism Design Concept.</p>
      </footer>
    </div>
  );
}

export default App;
