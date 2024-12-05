const useMenuStore = defineStore('menu', () => {
  const menu = ref({ name: '全局菜单' } as Record<string, any>)

  return { menu }
})

export default useMenuStore
