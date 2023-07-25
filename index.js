let count = 0;

    function updateCounter() {
      const counterElement = document.getElementById('counter');
      counterElement.textContent = count;
    }

    function increment() {
      count++;
	count++;    
      updateCounter();
    }

    function decrement() {
      count--;
      updateCounter();
    }
