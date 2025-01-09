import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
function App() {
    return (
        <>
            <Navbar />
            <Footer />
            <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", justifyContent: "center", alignItems: "center", gap: "20px" }}>
                <Card Title="Card 1" btnText="Read More" desription="My Name is Harsh , I am a Frontend Developer, I am learning React, I am a Frontend Developer, I am learning React" />
                <Card Title="Card 2" btnText="Add to Cart" desription="My Name is Harsh , I am a Frontend Developer, I am learning React, I am a Frontend Developer, I am learning React" />
                <Card Title="Card 3" btnText="Submit" desription="My Name is Harsh , I am a Frontend Developer, I am learning React, I am a Frontend Developer, I am learning React" />
                <Card Title="Card 4" btnText="Save" desription="My Name is Harsh , I am a Frontend Developer, I am learning React, I am a Frontend Developer, I am learning React" />
                <Card Title="Card 5" btnText="Yes" desription="My Name is Harsh , I am a Frontend Developer, I am learning React, I am a Frontend Developer, I am learning React" />
                <Card Title="Card 6" btnText="No" desription="My Name is Harsh , I am a Frontend Developer, I am learning React, I am a Frontend Developer, I am learning React" />
            </section>
        </>
    )
}

export default App
