function todayPrices() {
    var api = "https://api.preciodelaluz.org/v1/prices/all?zone=PCB&version=44";
    var apiEncoded = encodeURIComponent( api );
    var jsonCORSProxy = 'https://api.allorigins.win/raw?url='
    var now = new Date();
    var today = now.toLocaleDateString( "es-ES" );
    var url = jsonCORSProxy + apiEncoded + "&version=" + today;
    var opts = {
        method : "GET",
        cache : "no-cache"
    };

    fetch( url, opts )
        .then(response => {
            if (!response.ok) {
                throw new Error("HTTP error " + response.status);
            }
            return response.json();
        })
        .then(json => {
            showData( json );
            var currentHour = now.toLocaleTimeString("es-ES").split( ":" )[0];
            if ( currentHour.length < 2 ) {
                currentHour = "0" + currentHour;
            }
            document.getElementById( currentHour ).scrollIntoView();

        })
        .catch(function ( err ) {
            console.log('error: ' + err);
        })
}

function showData( json ) {
    var parent = document.getElementById( 'preciosPorHora' );
    var row = document.createElement( "div" );
    var formattingOpts = {
        minimumFractionDigits : 2,
        maximumFractionDigits : 2
    };
    row.className = "row";
    for( var key in json ) {
        var value = json[ key ];
        var id = value.hour.split( "-" )[0]
        var hour = '<span class="bg-dark text-white rounded">&nbsp;' + id + ':00 </span>&nbsp;' + value.price.toLocaleString( "es-ES", formattingOpts ) + value.units;
        var dataDiv = document.createElement("div");
        dataDiv.innerHTML = hour;
        dataDiv.role = "alert";
        dataDiv.className = "alert ";
        if ( value[ "is-cheap" ] ) {
            dataDiv.className += "alert-success";
        } else {
            dataDiv.className += "alert-danger";
        }
        
        var column = document.createElement( "div" );
        column.className = "column col-xs-12 col-sm-12 col-lg-4 fs-2 text-center";
        column.id = id;
        column.appendChild( dataDiv );
        row.appendChild( column );
    }
    parent.appendChild( row );
}
