-- Github SDK error

local GithubError = {}
GithubError.__index = GithubError


function GithubError.new(code, msg, ctx)
  local self = setmetatable({}, GithubError)
  self.is_sdk_error = true
  self.sdk = "Github"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function GithubError:error()
  return self.msg
end


function GithubError:__tostring()
  return self.msg
end


return GithubError
