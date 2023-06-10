// embed_template.js: embed package template from Chromebrew repository using emgithub

const scriptElement  = document.getElementById('embed_template'),
      is_dark_mode   = (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches),
      template_path  = 'https://github.com/chromebrew/chromebrew/blob/master/packages/template.rb.template',
      emgithub_style = (is_dark_mode ? 'github-dark' : 'github'),
      emgithub_opts  = `style=${emgithub_style}&type=code&showBorder=on&showCopy=on`,
      emgithub_link  = `https://emgithub.com/embed-v2.js?target=${encodeURIComponent(template_path)}&${emgithub_opts}`;

scriptElement.src = emgithub_link;