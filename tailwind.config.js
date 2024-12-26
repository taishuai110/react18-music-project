/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      width: {
        1100: '1100px',
        980: '980px'
      },
      color: {
        primary: '#c20c0c'
      },
      backgroundImage: {
        sprite_01: 'url("@/assets/image/sprite_01.png")',
        sprite_02: 'url("@/assets/image/sprite_02.png")',
        sprite_cover: 'url("@/assets/image/sprite_cover.png")',
        sprite_icon: 'url("@/assets/image/sprite_icon.png")',
        sprite_icon2: 'url("@/assets/image/sprite_icon2.png")',
        sprite_icon3: 'url("@/assets/image/sprite_icon3.png")',
        sprite_button: 'url("@/assets/image/sprite_button.png")',
        sprite_button2: 'url("@/assets/image/sprite_button2.png")',
        sprite_table: 'url("@/assets/image/sprite_table.png")',
        sprite_playbar: 'url("@/assets/image/playbar_sprite.png")',
        sprite_playlist: 'url("@/assets/image/playlist_sprite.png")'
      }
    }
  },
  plugins: []
}
