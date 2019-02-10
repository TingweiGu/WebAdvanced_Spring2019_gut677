/**
 * @param data - object {
 *     initial: [], (list of choice IDs for the root node)
 *     choices: {}  (keyed object of all possible choices)
 * }
**/

var DecisionTree = function(data) {
  
  this.initial = data.initial;
  this.choices = data.choices;
  
  /* Return an array of choice objects for the root of the tree */
  this.getInitial = function() {
    if (!this.initial) throw 'DecisionTree: no initial choice(s) specified';
    return this.getChoices(this.initial);  
  };
  
  /* Get full choice data by specific id */
  this.getChoice = function(id) {
    if (!(id in this.choices)) return false;
    if (!('id' in this.choices[id])) this.choices[id].id = id;
    return this.choices[id];  
  };
  
  /* As above, but passing an array of choice IDs */
  this.getChoices = function(idList) {
    if(!idList) return [];
    var list = [];
    for(var i = 0, ln = idList.length; i < ln; i++) {
      var childChoice = this.getChoice(idList[i]);
      list.push(childChoice);
    }
    return list;  
  };
  
  /* Get an array of choice data for a parent id */
  this.getChildren = function(parentId) {  
    if (!(parentId in this.choices)) return false;
    if (!('children' in this.choices[parentId])) return false;
    
    var childIds = this.choices[parentId].children;
    return this.getChoices(childIds);  
  };
  
  /* Get an array of choice data for the parent(s) of an id */
  this.getParents = function(id) {
    
    var parents = [];
    var node = this.getChoice(id);
    
    while(node.parent) {
      node = this.getChoice(node.parent);
      parents.unshift(node);
    }
    
    return parents;
    
  };
  
  /* Get just an array of ids for the parents of a specific id */
  this.getParentIds = function(id) {
    var parents = this.getParents(id);
    var parentIds = [];
    for(var i = 0, ln = parents.length; i < ln; i++) {
      parentIds.push(parents[i].id);
    }
    return parentIds;
  };
  
  /* Get the 'name' prop for the parent of an id */
  this.getParentName = function(id) {
    var parent = this.getParents(id).pop();
    if(!parent) {
      return false;
    } else {
      return parent.name;
    }
  };
  
  /* Init - insert ids into choice objects, check dups, associate parents, etc */
  this.init = function() {    
    var idList = [];
    for(var k in this.choices) {
      if(idList.indexOf(k) !== -1) throw 'DecisionTree: duplicate ID "' + k + '" in choice set';
      
      var choice = this.getChoice(k);
      choice.id = k;
      
      var children = this.getChildren(k);
      for(var i = 0; i < children.length; i++) {
        
        var child = children[i];
        if(child.parent) throw 'DecisionTree: tried to assign parent "' + k + '" to child "' + choice.children[i] + '" which already has parent "' + child.parent + '"';
        child.parent = k;    
      }      
    }
    
    console.log('init', this.initial, this.choices);
    
  };
  
  this.init();
  
};


/*** TEST DATA ***/

var data = {
  initial: ['search-for-flights'],
  choices: {
    
    // Search for flights
    'search-for-flights': {
      name: 'Search for flights',
      children: ['enter-flight-information']
    },
    
    // Enter Flight information
    'enter-flight-information': {
      name: 'Enter flight information (from/ to)',
      children: ['roundtrip']
    },
    
    // Roundtrip?
    'roundtrip': {
      name: 'Roundtrip?',
      children: ['roundtrip-yes', 'roundtrip-no']
    },
    
// No
    'roundtrip-no': {
      name: 'No',
      children: ['enter-departing-date']
    },

    // Enter departing date
    'enter-departing-date': {
      name: 'Enter departing date',
      children: ['view-flight-solutions2']
    },
    
    // View flight solutions 
    'view-flight-solutions2': {
      name: 'View flight solutions',
      children: ['satisfied-with-solutions2']
    },

    // Satisfied with solutions?
    'satisfied-with-solutions2': {
      name: 'Satisfied with solutions?',
      children: ['satisfied-with-solutions-yes2', 'satisfied-with-solutions-no2']
    },

    // No
    'satisfied-with-solutions-no2': {
      name: 'No',
      children: ['try-again2']
    },

    // Start a new search
    'try-again2': {
      name: 'Try again',
    },

    // Yes
    'satisfied-with-solutions-yes2': {
      name: 'Yes',
      children: ['select-flight-solutions2']
    },

    // Select flight solutions
    'select-flight-solutions2': {
      name: 'Select flight solutions',
      children: ['enter-personal-information2']
    },
    
    // Enter personal information
    'enter-personal-information2': {
      name: 'Enter personal details & payment information',
      children: ['submit-personal-information2']
    },
    
    // Submit personal information
    'submit-personal-information2': {
      name: 'Submit personal details & payment information',
      children: ['success2']
    },

    // Success?
    'success2': {
      name: 'Success?',
      children: ['success-yes2', 'success-no2']
    },
    
    // No
    'success-no2': {
      name: 'No',
      children: ['2try-again-2']
    },

    '2try-again-2': {
      name: 'Try Again'
    },

    // Yes
    'success-yes2': {
      name: 'Yes',
      children: ['receive-message2']
    },

    // Receive message
    'receive-message2': {
      name: 'Receive success message & booking confirmation',
      children: ['receive-email-confirmation2']
    },

    // Receive confirmation
    'receive-email-confirmation2': {
      name: 'Receive email confirmation'
    },



// Yes
    'roundtrip-yes': {
      name: 'Yes',
      children: ['enter-departing-returning-date']
    },

    // Enter departing & returning date
    'enter-departing-returning-date': {
      name: 'Enter departing & returning date',
      children: ['view-flight-solutions']
    },
    
    // View flight solutions 
    'view-flight-solutions': {
      name: 'View flight solutions',
      children: ['satisfied-with-solutions']
    },

    // Satisfied with solutions?
    'satisfied-with-solutions': {
      name: 'Satisfied with solutions?',
      children: ['satisfied-with-solutions-yes', 'satisfied-with-solutions-no']
    },

    // No
    'satisfied-with-solutions-no': {
      name: 'No',
      children: ['try-again']
    },

    // Start a new search
    'try-again': {
      name: 'Try again',
    },

    // Yes
    'satisfied-with-solutions-yes': {
      name: 'Yes',
      children: ['select-flight-solutions']
    },

    // Select flight solutions
    'select-flight-solutions': {
      name: 'Select flight solutions',
      children: ['enter-personal-information']
    },
    
    // Enter personal information
    'enter-personal-information': {
      name: 'Enter personal details & payment information',
      children: ['submit-personal-information']
    },
    
    // Submit personal information
    'submit-personal-information': {
      name: 'Submit personal details & payment information',
      children: ['success']
    },

    // Success?
    'success': {
      name: 'Success?',
      children: ['success-yes', 'success-no']
    },
    
    // No
    'success-no': {
      name: 'No',
      children: ['try-again-2']
    },

    'try-again-2': {
      name: 'Try Again'
    },

    // Yes
    'success-yes': {
      name: 'Yes',
      children: ['receive-message']
    },

    // Receive message
    'receive message': {
      name: 'Receive success message & booking confirmation',
      children: ['receive-email-confirmation']
    },

    // Receive confirmation
    'receive email confirmation': {
      name: 'Receive-email-confirmation'
    }
    
  } 
};

/** TEST CODE **/

$(function() {
  
  var tree = new DecisionTree(data);
  var $list = $('#choices');
  var $title = $('h1');
  
  var current_id = null;
  
  var renderList = function(items) {
    
    var title = tree.getParentName(items[0].id);
    if(title) {
      $title.text(title);
    } else {
      $title.text('Book a flight ticket');
    }
    
    $list.empty();
    for(var i = 0; i < items.length; i++) {
      var item = items[i];
      $list.append('<li><a href="#" data-choice="' + item.id + '">' + item.name + '</a></li>');
    }
  };
  
  var _doInitial = function() {
      var initData = tree.getInitial();
      current_id = null;
      renderList(initData);
  };
  
  $(document).on('click', '#choices a', function(e) {
    e.preventDefault();
    var choiceId = $(this).data('choice');
    console.log('clicked', choiceId);
    
    var kids = tree.getChildren(choiceId);
    if(kids) {
      current_id = choiceId;
      renderList(kids);
    }
  });
  
  $('#back').on('click', function(e) {
    e.preventDefault();
    if(!current_id) return false;
    console.log('back button clicked', current_id);
    
    var parents = tree.getParents(current_id);
   
    if(parents.length > 0) {
      var prev_node = parents.pop();
      current_id = prev_node.id;
      renderList(tree.getChildren(prev_node.id));
    } else {
      _doInitial();
    }
    
  });
  
  _doInitial();

  
});

