var zombies = {
    'div1': '<div id=zerohero></div>',
    'div2': '<div id=zoombah></div>'
};

$('#zombies').append(zombies.div1, zombies.div2);

var zombie1 = {
    'name': 'Zero Daz Heroz',
    'image': '<div id=zombie1><img src="http://placezombie.com/200x300"></div>',
    'clicks': 0,
    'display': function display() {
        $('#zerohero').append(zombie1.image);
        $('#zombie1').prepend(zombie1.name);
        $('#zombie1').append(zombie1.clicks);
    },
    'click': function clicks() {
        $('#zombie1').click(zombie1.increment);
    },
    'increment': function() {
        zombie1.clicks = zombie1.clicks + 1;
        console.log(zombie1.clicks);
        $('#zombie1').remove();
        zombie1.display();
        zombie1.click(zombie1.increment);
    }
};

var zombie2 = {
    'name': 'ZooomBah Da Zombah',
    'image': '<div id=zombie2><img src="http://placezombie.com/g/200x300"></div>',
    'clicks': 0,
    'display': function display() {
        $('#zoombah').append(zombie2.image);
        $('#zombie2').prepend(zombie2.name);
        $('#zombie2').append(zombie2.clicks);
    },
    'click': function clicks() {
        $('#zombie2').click(zombie2.increment);
    },
    'increment': function() {
        zombie2.clicks = zombie2.clicks + 1;
        console.log(zombie2.clicks);
        $('#zombie2').remove();
        zombie2.display();
        zombie2.click(zombie2.increment);
    }

};

function coolKitty() {
  if (zombie2.increment) {
    $('#container').alert();

  }
}

coolKitty;

zombie1.display();
zombie1.click(zombie1.increment);
zombie2.display();
zombie2.click(zombie2.increment);
