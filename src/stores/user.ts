const useUserStore = defineStore('user', () => {
  const user = ref({ name: '赖晓飞', phone: '13094404964' } as Record<string, any>)
  const roles = ref(['common'] as string[])
  const permissions = ref(['system:user:add'] as string[])

  return { user, roles, permissions }
})

export default useUserStore
