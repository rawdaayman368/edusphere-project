$root = "e:\front end\project"
$http = New-Object System.Net.HttpListener
$http.Prefixes.Add("http://localhost:8080/")
$http.Start()
Write-Host "Server: http://localhost:8080  (Ctrl+C to stop)"
while ($http.IsListening) {
    $ctx = $http.GetContext()
    $p = $ctx.Request.Url.LocalPath.TrimStart('/')
    if ($p -eq '') { $p = 'index.html' }
    $fp = Join-Path $root $p
    if (Test-Path $fp) {
        $bytes = [IO.File]::ReadAllBytes($fp)
        $ctx.Response.ContentType = switch ([IO.Path]::GetExtension($fp)) {
            '.html' {'text/html;charset=utf-8'} '.css' {'text/css'} '.js' {'application/javascript'} default {'application/octet-stream'}
        }
        $ctx.Response.ContentLength64 = $bytes.Length
        $ctx.Response.OutputStream.Write($bytes,0,$bytes.Length)
    } else {
        $ctx.Response.StatusCode = 404
    }
    $ctx.Response.Close()
}
