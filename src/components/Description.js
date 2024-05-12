function Description() {
    const container = document.createElement('div');
    container.className = 'description';
    const title = document.createElement('h1');
    title.textContent = "Mani's Dum Biryani";
    const paragraph = document.createElement('p');
    paragraph.textContent = `As we set off from our home at Hebbal at 3:30 am, bleary-eyed and last night's meal barely digested, the question at the top of our minds was: "Who has biryani so early in the morning?" Thousands of Bengalurians, apparently! While the Instagram universe may seem to have just woken up to 4 am biryani, it has been around for a while.\n\nThe best place to understand this early morning biryani mania is Hoskote. We drove 30-odd km from Bengaluru towards Kolar and turned in towards Mani Dum Biryani. A long line of cars parked on either side of the road and every bylane greeted us. The moon was high and it was not yet five o'clock, but people were milling about like it was a village fair.`;

  
    container.appendChild(title);
    container.appendChild(paragraph);
  
    return container;
  }

  export default Description;