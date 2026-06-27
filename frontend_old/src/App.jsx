import logo from './assets/acepredict_logo_dark.png'

function App() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#08111f',
        color: 'white'
      }}
    >
      <nav
        style={{
          padding: '20px 60px'
        }}
      >
        <img
          src={logo}
          alt="AcePredict"
          style={{
            width: '220px'
          }}
        />
      </nav>

      <section
        style={{
          textAlign: 'center',
          paddingTop: '120px'
        }}
      >
        <h1
          style={{
            fontSize: '4rem'
          }}
        >
          Predict Tennis Matches With AI
        </h1>

        <p
          style={{
            marginTop: '20px',
            fontSize: '1.2rem'
          }}
        >
          ATP Match Predictions, Head-to-Head Analysis and Tennis Intelligence
        </p>
      </section>
    </div>
  )
}

export default App