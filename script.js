// script.js
document.getElementById("calculateBtn").addEventListener("click", function () {
    const name1 = document.getElementById("name1").value.toLowerCase().replace(/\s+/g, '');
    const name2 = document.getElementById("name2").value.toLowerCase().replace(/\s+/g, '');
  
    if (!name1 || !name2) {
      alert("Please enter both names!");
      return;
    }
  
    // Calculate uncommon letters
    const combined = name1 + name2;
    const uniqueCount = combined.split('').filter(char => 
      (name1.includes(char) && !name2.includes(char)) || 
      (name2.includes(char) && !name1.includes(char))
    ).length;
  
    // FLAMES sequence
    const flames = ["Friends", "Love", "Affection", "Marriage", "Enemy", "Sibling"];
    let index = 0;
  
    for (let i = 6; i > 1; i--) {
      index = (index + uniqueCount - 1) % i;
      flames.splice(index, 1);
    }
  
    // Show result
    document.getElementById("flamesResult").textContent = flames[0];
    document.getElementById("result").classList.remove("hidden");
  });
  