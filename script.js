const content = {
    articles: [
        { title: "How to Create a Budget", source: "The Balance", link: "https://www.thebalancemoney.com/how-to-make-a-budget-1289587", image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" },
        { title: "Introduction to Investing", source: "Investopedia", link: "https://www.investopedia.com/articles/basics/06/invest1000.asp", image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" },
        { title: "Saving Money: A Comprehensive Guide", source: "Kiplinger", link: "https://www.kiplinger.com/personal-finance/how-to-save-money", image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" },
        { title: "Beginner's Guide to Investments", source: "NerdWallet", link: "https://www.nerdwallet.com/article/investing/how-to-start-investing", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" },
        { title: "Understanding Credit Scores", source: "Credit Karma", link: "https://www.creditkarma.com/credit-scores", image: "https://images.unsplash.com/photo-1607863680198-23d4b2565df0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" },
        { title: "Retirement Planning 101", source: "Fidelity", link: "https://www.fidelity.com/viewpoints/retirement/retirement-guidelines", image: "https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" },
        { title: "How to Pay Off Debt", source: "Ramsey Solutions", link: "https://www.ramseysolutions.com/debt/how-to-pay-off-debt", image: "https://images.unsplash.com/photo-1586034679970-cb7b5fc4928a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" },
        { title: "Guide to Cryptocurrency", source: "CoinDesk", link: "https://academy.binance.com/es/articles/a-complete-guide-to-cryptocurrency-trading-for-beginners?utm_campaign=googleadsxacademy&utm_source=googleadwords_int&utm_medium=cpc&ref=HDYAHEES&gad_source=1&gclid=CjwKCAiAjKu6BhAMEiwAx4UsAunJ0WeyJ-HBRr1Q_neQaXqDqaNVoHtyhYCXyANXrjGWQnIMwDSUOBoC9s4QAvD_BwE", image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" },
        ],
 
        videos: [
            { title: "Getting Out of Debt", author: "Dave Ramsey", link: "https://www.youtube.com/watch?v=h-fcI7W-ucY", image: "https://img.youtube.com/vi/h-fcI7W-ucY/0.jpg" },
            { title: "Real Estate Investing", author: "Graham Stephan", link: "https://www.youtube.com/watch?v=T_7vhsSBi7c", image: "https://img.youtube.com/vi/T_7vhsSBi7c/0.jpg" },
            { title: "Curso Completo de Finanzas Personales", author: "Billetera Saludable", link: "https://www.youtube.com/playlist?list=PL8RelaAdiQirMTpkWOvj2CJO2sFD0s0mI", image: "https://img.youtube.com/vi/UhzdeGjLJ78/0.jpg" },
            { title: "Introduction to Investing", author: "Investopedia", link: "https://www.youtube.com/watch?v=KfDB9e_cO4k", image: "https://img.youtube.com/vi/KfDB9e_cO4k/0.jpg" },
            { title: "1er Curso de Finanzas Personales e Inversiones GRATIS para Principiantes", author: "Sergi Torrens", link: "https://www.youtube.com/playlist?list=PL6AQmhIr6GK2-7mawmdwbL_jtKcwJOZed", image: "https://img.youtube.com/vi/KfDB9e_cO4k/0.jpg" },
            { title: "Understanding the Stock Market", author: "Phil Town", link: "https://www.youtube.com/watch?v=p7HKvqRI_Bo", image: "https://img.youtube.com/vi/p7HKvqRI_Bo/0.jpg" },
            { title: "How to Budget Your Money", author: "The Budget Mom", link: "https://www.youtube.com/watch?v=sVKQn2I4HDM", image: "https://img.youtube.com/vi/sVKQn2I4HDM/0.jpg" },
            { title: "Retirement Planning Explained", author: "Two Cents", link: "https://www.youtube.com/watch?v=gvZSpET11ZY", image: "https://img.youtube.com/vi/gvZSpET11ZY/0.jpg" },
            { title: "Understanding Credit Cards", author: "The Credit Shifu", link: "https://www.youtube.com/watch?v=aNYZkMgTyb0", image: "https://img.youtube.com/vi/aNYZkMgTyb0/0.jpg" },
            { title: "Curso Completo de Finanzas y Emprendimiento", author: "Valuetainment", link: "https://www.youtube.com/watch?v=UhzdeGjLJ78", image: "https://img.youtube.com/vi/UhzdeGjLJ78/0.jpg" },
            { title: "How to Buy Your First Rental Property", author: "Bigger Pockets", link: "https://www.youtube.com/watch?v=T_7vhsSBi7c", image: "https://img.youtube.com/vi/T_7vhsSBi7c/0.jpg" },
            { title: "Understanding Cryptocurrency", author: "99Bitcoins", link: "https://www.youtube.com/watch?v=41JCpzvnn_0", image: "https://img.youtube.com/vi/41JCpzvnn_0/0.jpg" },
            { title: "How to Improve Your Credit Score", author: "BeatTheBush", link: "https://www.youtube.com/watch?v=Vn9ounAgG3w", image: "https://img.youtube.com/vi/Vn9ounAgG3w/0.jpg" }
        ],
        
    podcasts: [
        { title: "The Dave Ramsey Show", link: "https://www.ramseysolutions.com/shows/the-ramsey-show", image: "https://images.unsplash.com/photo-1589903308904-1010c2294adc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" },
        { title: "Planet Money", link: "https://www.npr.org/podcasts/510289/planet-money", image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" },
        { title: "The Motley Fool's Money Podcast", link: "https://www.fool.com/podcasts/motley-fool-money/", image: "https://images.unsplash.com/photo-1604594849809-dfedbc827105?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" },
        { title: "Radical Personal Finance", link: "https://radicalpersonalfinance.com/", image: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" },
        { title: "The Financial Diet", link: "https://thefinancialdiet.com/category/podcast/", image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" },
        { title: "Freakonomics Radio", link: "https://freakonomics.com/series/freakonomics-radio/", image: "https://images.unsplash.com/photo-1611095973763-414019e72400?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" },
        { title: "BiggerPockets Money Podcast", link: "https://www.biggerpockets.com/podcast-show/money", image: "https://images.unsplash.com/photo-1618044619888-009e412ff12a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" },
        { title: "So Money with Farnoosh Torabi", link: "https://www.farnoosh.tv/podcast/", image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" },
        { title: "Afford Anything", link: "https://affordanything.com/podcast/", image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" },
        { title: "Listen Money Matters", link: "https://www.listenmoneymatters.com/show/", image: "https://images.unsplash.com/photo-1606189934846-a527add8a77b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" },
        { title: "The Clark Howard Podcast", link: "https://clark.com/podcast/", image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" },
        { title: "Stacking Benjamins", link: "https://www.stackingbenjamins.com/category/podcast/", image: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" },
        { title: "Money For the Rest of Us", link: "https://moneyfortherestofus.com/", image: "https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" },
        { title: "InvestED: The Rule #1 Investing Podcast", link: "https://www.ruleoneinvesting.com/podcast/", image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" }
    ],
    courses: [
      { title: "Financial Markets", platform: "Yale University (Coursera)", link: "https://www.coursera.org/learn/financial-markets-global", image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" },
      { title: "Finance for Everyone: Smart Tools for Decision-Making", platform: "University of Michigan (edX)", link: "https://www.edx.org/course/finance-for-everyone-smart-tools-for-decision-making", image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" },
      { title: "Financial Planning for Young Adults", platform: "University of Illinois (Coursera)", link: "https://www.coursera.org/learn/financial-planning", image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" },
      { title: "Personal & Family Financial Planning", platform: "University of Florida (Coursera)", link: "https://www.coursera.org/learn/family-planning", image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" },
      { title: "Behavioral Finance", platform: "Duke University (Coursera)", link: "https://www.coursera.org/learn/duke-behavioral-finance", image: "https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" },
      { title: "Investment Management", platform: "University of Geneva (Coursera)", link: "https://www.coursera.org/learn/investment-management", image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" },
      { title: "Principles of Sustainable Finance", platform: "Erasmus University Rotterdam (Coursera)", link: "https://www.coursera.org/learn/sustainable-finance", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" },
      { title: "Financial Engineering and Risk Management Part I", platform: "Columbia University (Coursera)", link: "https://www.coursera.org/learn/financial-engineering-1", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" },
      { title: "Financial Accounting", platform: "University of Pennsylvania (Coursera)", link: "https://www.coursera.org/learn/wharton-accounting", image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" },
      { title: "Finance for Non-Finance Professionals", platform: "Rice University (Coursera)", link: "https://www.coursera.org/learn/finance-for-non-finance", image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" },
      { title: "Understanding Financial Statements", platform: "University of Virginia (Coursera)", link: "https://www.coursera.org/learn/uva-darden-financial-accounting", image: "https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" },
      { title: "Financial Planning for Young Adults", platform: "University of Illinois (Coursera)", link: "https://www.coursera.org/learn/financial-planning", image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" },
{ title: "Blockchain and Money", platform: "MIT OpenCourseWare", link: "https://ocw.mit.edu/courses/sloan-school-of-management/15-s12-blockchain-and-money-fall-2018/", image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" }
    ]
  };
  
  // Function to create content cards
  function createCard(item, type) {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <a href="${item.link}" target="_blank" class="card-link">
          <img src="${item.image}" alt="${item.title}" class="card-image">
          <h3>${item.title}</h3>
          <p>${type === 'articles' ? item.source : type === 'videos' ? item.author : type === 'courses' ? item.platform : ''}</p>
        </a>
    `;
    return card;
  }
  
  // Populate content
  document.addEventListener('DOMContentLoaded', () => {
      Object.keys(content).forEach(type => {
          const container = document.getElementById(type);
          content[type].forEach(item => container.appendChild(createCard(item, type)));
      });
  
      // Tab functionality
      const tabs = document.querySelectorAll('.tab-button');
      tabs.forEach(tab => {
          tab.addEventListener('click', () => {
              tabs.forEach(t => t.classList.remove('active'));
              tab.classList.add('active');
              document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));
              document.getElementById(tab.dataset.tab).classList.add('active');
          });
      });
  
      // Compound Interest Calculator
      window.calculateCompoundInterest = () => {
          const principal = parseFloat(document.getElementById('principal').value);
          const rate = parseFloat(document.getElementById('rate').value) / 100;
          const time = parseFloat(document.getElementById('time').value);
          const monthly = parseFloat(document.getElementById('monthly').value);
  
          if (isNaN(principal) || isNaN(rate) || isNaN(time) || isNaN(monthly)) {
              document.getElementById('result').textContent = 'Please enter valid values.';
              return;
          }
  
          let total = principal;
          for (let i = 0; i < time * 12; i++) {
              total = total * (1 + rate / 12) + monthly;
          }
  
          const interest = total - principal - (monthly * time * 12);
          document.getElementById('result').innerHTML = `
              Total amount: $${total.toFixed(2)}<br>
              Interest earned: $${interest.toFixed(2)}
          `;
  
          updateChart(principal, total, interest);
      };
  
      // Investment Growth Chart
      const ctx = document.getElementById('investmentChart').getContext('2d');
      window.investmentChart = new Chart(ctx, {
          type: 'bar',
          data: {
              labels: ['Initial Investment', 'Total Amount', 'Interest Earned'],
              datasets: [{
                  label: 'Investment Growth',
                  data: [0, 0, 0],
                  backgroundColor: [
                      'rgba(75, 192, 192, 0.6)',
                      'rgba(54, 162, 235, 0.6)',
                      'rgba(255, 206, 86, 0.6)'
                  ],
                  borderColor: [
                      'rgba(75, 192, 192, 1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 206, 86, 1)'
                  ],
                  borderWidth: 1
              }]
          },
          options: {
              scales: {
                  y: {
                      beginAtZero: true
                  }
              }
          }
      });
  
      function updateChart(principal, total, interest) {
          window.investmentChart.data.datasets[0].data = [principal, total, interest];
          window.investmentChart.update();
      }
  
      // Form submission
      document.getElementById('contact-form').addEventListener('submit', (e) => {
          e.preventDefault();
          alert('Thank you for your message. We will get back to you soon!');
          e.target.reset();
      });
  });
  
  