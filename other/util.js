function joinPaths(...xs) { return xs.filter(Boolean).join('/') }

async function showModal(x) {
  let { promise: p, resolve: res } = Promise.withResolvers();
  document.body.append(x);
  x.returnValue = '';
  x.addEventListener('close', () => {
    x.remove();
    res([x.returnValue, x.returnDetail]);
  });
  x.showModal();
  return p;
}

class LoadingManager {
  set = new Set();
  add(x) { this.set.add(x) }
  has(x) { this.set.has(x) }
  rm(x) { this.set.delete(x) }
}

let loadman = new LoadingManager();
export { joinPaths, showModal, LoadingManager, loadman };
