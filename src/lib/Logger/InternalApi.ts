class InternalApi {
  static error(errorData: unknown, context: string) {
    console.error(`Error in ${context}:`, errorData)
  }

  static info(message: string) {
    console.log(`Info: ${message}`)
  }

  static warn(message: string) {
    console.warn(`Warning: ${message}`)
  }
}

export default InternalApi
