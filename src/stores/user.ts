const useUserStore = defineStore('user', () => {
  const user: Record<string, any> = ref({ name: '赖晓飞', phone: '13094404964' })
  const roles = ref(['common'] as string[])
  const permissions = ref(['system:user:add'] as string[])

  function logOut() {
    user.value = {}
    return Promise.resolve()
  }

  return { user, roles, permissions, logOut }
})

export default useUserStore
