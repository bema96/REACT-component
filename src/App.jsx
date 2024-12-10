// App.jsx
import './App.scss';
import HeaderComponent from './components/Header/header';
import Content1Component from './components/Content1/content1';
import { Content2 } from './components/Content2/content2';
import { Content3 } from './components/Content3/content3';
import FooterContent from './components/Footer/footer';
import ReactComponent from './components/Greetings/react';
import { FavoritList } from './components/Livretter/favoritList';
import { Button } from './components/Button/button';

const App = () => {
  // Liste over livretter
  const favoritMeals = ["Pizza", "Sushi", "Tacos", "Pasta", "Burgers"];
  
  // Liste over film (Bonus opgave)
  const favoritMovies = ["Inception", "The Matrix", "The Dark Knight", "Pulp Fiction", "Forrest Gump"];

  // Funktioner til at vise alerts
  const showAlert1 = () => alert("Detaljer knap blev klikket!");
  const showAlert2 = () => alert("Forside knap blev klikket!");
  const showAlert3 = () => alert("Køb nu knap blev klikket!");




  return (
    <>
      <HeaderComponent />
      <Content1Component />
      <Content2 />
      <Content3 />
      <FooterContent />
      <ReactComponent />
      
      {/* Rendering af livretter */}
      <FavoritList
        items={favoritMeals} 
        title="Mine Livretter"
      />
      
      {/* Rendering af film (Bonusopgave) */}
      <FavoritList
        items={favoritMovies}
        title="Mine Favoritfilm"
      />



            {/* Buttons */}
            <Button 
              text="Detaljer" 
              action={showAlert1} 
              size="small" 
              theme="light"
            />
            <Button 
              text="Forside" 
              action={showAlert2} 
              size="medium" 
              theme="dark"
            />
            <Button 
              text="Køb nu" 
              action={showAlert3} 
              size="large" 
              theme="light"
            />

    </>
  );
};

export default App;
