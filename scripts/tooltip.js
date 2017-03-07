(function() {
    // Maps a string to a tooltip (in the form of a HTML string)
    var tooltips = {
        'GTD' : 'Getting Things Done',
        'IDE' : 'Integrated Development Environment',
        'Regression' : 'A <em>regression</em> is an unintended side effect of a modification to the code. <br>'
                        + 'e.g. when fixing one bug causes another bug'
    };

    // Maps a string to a list of aliases
    var aliases = {
      'Regression' : ['regression', 'regressions']
    }

    for (let term in aliases) {
        let tooltip = tooltips[term];
        let values = aliases[term];
        for (let i in values) {
            let alias = values[i];
            tooltips[alias] = tooltip;
        }
    }

    var count = 0;
    $('tooltip').each(function() {
        var term = $(this).text();
        var title = tooltips[term];
        var id = String(count++);
        $(this).attr('id', id);
        $(this).tooltip({
            items: '#' + id,
            content: title
        });
    });
})();
