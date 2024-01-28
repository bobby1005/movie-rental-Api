
class Movie {
    constructor(title, genre, releaseYear) {
      this.title = title;
      this.genre = genre;
      this.releaseYear = releaseYear;
      this.isRented = false;
    }
  }
  
  class Rental {
    constructor(customerName, rentedMovie) {
      this.customerName = customerName;
      this.rentedMovie = rentedMovie;
      this.rentedDate = new Date();
    }
  }
  
  class MovieStore {
    constructor() {
      this.movies = [];
      this.rentals = [];
    }
  
    addMovie(title, genre, releaseYear) {
      const movie = new Movie(title, genre, releaseYear);
      this.movies.push(movie);
      return movie;
    }
  
    rentMovie(customerName, movieTitle) {
      const movie = this.findMovie(movieTitle);
  
      if (movie && !movie.isRented) {
        movie.isRented = true;
        const rental = new Rental(customerName, movie);
        this.rentals.push(rental);
        return rental;
      } else {
        return null; // Movie not available for rent
      }
    }
  
    returnMovie(rental) {
      const index = this.rentals.indexOf(rental);
  
      if (index !== -1) {
        rental.rentedMovie.isRented = false;
        this.rentals.splice(index, 1);
      }
    }
  
    findMovie(title) {
      return this.movies.find(movie => movie.title === title);
    }
  
    getAvailableMovies() {
      return this.movies.filter(movie => !movie.isRented);
    }
  
    getRentedMovies() {
      return this.movies.filter(movie => movie.isRented);
    }
  }

promptUser();

main();




  