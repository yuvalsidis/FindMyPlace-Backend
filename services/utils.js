export function extractSearchTerms(query, parameters) {
    const keyword = parameters.placetype || 'place'
    const location = parameters.location || null
    return { keyword, location }
  }