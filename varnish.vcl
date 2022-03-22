vcl 4.0;

backend default {
  .host = "10.0.0.68:3000";
}


sub vcl_backend_response {
    set beresp.do_esi = true;
}