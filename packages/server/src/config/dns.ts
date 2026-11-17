import dns from 'node:dns';

/**
 * Local-dev workaround for `querySrv ECONNREFUSED` with mongodb+srv:// URIs.
 *
 * On some Windows networks Node can't read the system DNS server (e.g. an IPv6
 * link-local router address) and falls back to 127.0.0.1, so the SRV lookup fails.
 * Set DNS_SERVERS in your local .env (e.g. "8.8.8.8,1.1.1.1") to override it.
 * Leave it unset in production so the host's own DNS is used.
 *
 * Must run before mongoose.connect().
 */
export const applyDnsOverride = (): void => {
  const servers = process.env.DNS_SERVERS?.split(',')
    .map((s) => s.trim())
    .filter(Boolean);

  if (servers?.length) {
    dns.setServers(servers);
  }
};
