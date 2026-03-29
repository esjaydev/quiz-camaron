Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Image]::FromFile("assets\camaron.png")
$bmp = New-Object System.Drawing.Bitmap 150, 150
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.Clear([System.Drawing.Color]::Transparent)
$g.DrawImage($img, 0, 0, 50, 50)
$g.Dispose()
$bmp.Save("assets\camaron-spaced.png", [System.Drawing.Imaging.ImageFormat]::Png)
$img.Dispose()
$bmp.Dispose()
