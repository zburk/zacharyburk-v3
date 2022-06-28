<template>
  <div>
    <header class="flex items-center flex-col md:flex-row justify-center w-full bg-blue-900 py-16">
      <div class="pl-16 text-white  md:bg-transparent flex-1 w-full">
        <a href="https://sakai.unc.edu/access/lessonbuilder/item/3199355/group/4add0404-53f4-4e17-8ab8-968545689f42/Manuals,%20Policies%20_%20Syllabi/Clinic%20Manual_Final%20Jun%202022.pdf">Clinic Manual</a>
        <a href="https://unccdiclient.seazona.com/Login.aspx?ReturnUrl=%2fDefault.aspx">Seazona</a>
        <a href="https://drive.google.com/file/d/1mnDwwqSZ_Jd03OKpXatT-FlSWGoWP9kf/view?usp=sharing">Implant</a>
      </div>
    </header>
  </div>
</template>

<script scoped>
export default {
  name: 'links'
}
</script>

<style>
  a {
    @apply text-blue-400 !important
  }
  .header-text {
    @apply text-5xl font-bold italic
  }
  .sub-text {
    @apply text-2xl font-thin
  }
  .glow {
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.4);
  }
  .light-blue-bg {
    background-color: #EDF2F7;
  }
</style>
