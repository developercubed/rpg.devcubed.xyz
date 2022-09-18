jQuery(function($) {
    $('body').terminal({
        help: function() {
            this.clear();
            this.echo(help);
        },
        stats: function() {
            this.clear();
            this.echo(`${showStats()}\n`);
        },
        fight: function() {
            this.clear()
            if (level <= 2) {
                this.echo(fight(0, level));
            }
        },
        run: function() {
            this.clear();
            this.echo(run())
        },
        attack: function() {
            this.clear()
            this.echo(attack())
        },
        f: function() {
            this.clear()
            if (level <= 2) {
                this.echo(fight(0, level));
            }
        },
        r: function() {
            this.clear();
            this.echo(run())
        },
        a: function() {
            this.clear()
            this.echo(attack())
        },
        inv: function(page) {
            this.clear();
            this.echo(invList(page))
        },
        equip: function(item) {
            this.clear();
            this.echo(equip(items[item]))
            refresh()
        },
        sell: function(item) {
            this.clear();
            this.echo(sell(items[item]))
            refresh()
        },
        inspect: function(item) {
            this.clear();
            this.echo(inspect(items[item]))
        },
        listItems: function() {
            this.clear();
            this.echo(listAllItems())
        },
        save: function() {
            this.clear();
            save();
            this.echo('Saved Game');
        },
        dev: function(pass) {
            if (pass == decode('cGFzcw==')) {
                devMode = true
                this.echo('dev mode activated')
            }
        },
        addcoins: function(num) {
            if (devMode == true) {
                addcoins(num)
                this.clear();
                this.echo(stats);
            }
        },
        addxp: function(num) {
            if (devMode == true) {
                addxp(num)
                this.clear();
                this.echo(stats);
            }
        },
        give: function(item) {
            if (devMode == true) {
                this.echo(additem(items[item]))
            }
        }
    }, {
        greetings: `${showStats()}\n`,
        prompt: `${white}>>> `,
    });
});