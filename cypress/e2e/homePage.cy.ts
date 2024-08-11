describe('HomePage Component', () => {
   it('should render the homepage and check if AliceCarousel is present', () => {
      // Visit the homepage
      cy.visit('/');

      // Verify that the element with data-testId="cyAliceCarousel" exists
      cy.get('[data-testId="cyAliceCarousel"]').should('exist');

      // Verify that AliceCarousel contains elements with the class "alice-carousel"
      cy.get('[data-testId="cyAliceCarousel"] .alice-carousel').should('exist');

      // Verify that the carousel has at least one item
      cy.get(
         '[data-testId="cyAliceCarousel"] .alice-carousel .alice-carousel__stage-item',
      )
         .its('length')
         .should('be.gte', 1);

      // Verify that links in the carousel are correctly set
      cy.get(
         '[data-testId="cyAliceCarousel"] .alice-carousel .alice-carousel__stage-item a',
      ).each((link) => {
         cy.wrap(link)
            .should('have.attr', 'href')
            .and('match', /\/movie\/\d+/);
      });

      // Verify that the "Now in Theatres" and "Popular Movies" sections are rendered
      cy.get('[data-testId="cyMoviesInTheaterHeader"]').should('exist');
      cy.get('[data-testId="cyPopularMoviesHeader"]').should('exist');

      cy.get('[data-testId="cyMoviesInTheaterHeader"]')
         .should('exist') // Verify that it exists
         .next('.row')
         .find('[data-testId="cyMovieCarousel"]')
         .should('exist'); // Verify that this element exists
   });
});
