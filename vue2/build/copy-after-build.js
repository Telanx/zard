const path = require('path');
const fs = require('fs').promises;

function CopyafterbuildPlugin(options) {
    // 复制文件分为文件->文件和文件->目录
    function copyFileTo(from, to, name) {
        return fs.stat(to)
            .then(r => {
                if(r.isDirectory()) {
                    // 目录的话，直接移动过去
                    to = path.resolve(to, name);
                }
                return fs.copyFile(from, to);
            }).catch(err => {
                //console.log(`目标路径${to}不存在:复制文件失败！`);
                return fs.copyFile(from, to);
            });
    }
    

    // 复制目录，存在目录就不管，不存在目录就新建
    function copyDirTo(from, to, name) {
        // console.log(`复制目录:${name}`);
        if (name) {
            // 创建目录
            let topath = path.resolve(to);
            fs.access(to).
                then().
                catch(err => {
                    // 不存在则新建
                    // ('新建目录：'+topath);
                    fs.mkdir(topath);
                });
        }
        // 遍历目录        
        return fs.readdir(from)
            .then(list => Promise.all(
                list.reduce(
                    (prev, next) => {
                        let fromPath = path.resolve(from, next);
                        let toPath = path.resolve(to, next);    
                        return prev.concat(copy(fromPath, toPath, next));
                    } , [])
                )
            );
    }
    // 复制的几种情况:
    // 1.文件->文件
    // 2.文件->目录
    // 3.目录->目录(文件系统中不允许同名目录和文件同一级出现，所以不会出现目录->文件情况)
    function copy(from = options.from, to = options.to, name="") {
        
            console.log(`copy ${from} -> ${to}...`);
        return fs.access(from)
            .then(() => fs.stat(from))
            .then(f => {
                let isFromDirectory = f.isDirectory();
                if (isFromDirectory) {
                    // 复制目录
                    return copyDirTo(from, to, name);
                } else {
                    // 复制文件
                    let basename = path.basename(from);
                    return copyFileTo(from, to, basename);
                }
            }).catch(err => {
                console.log(`-------copy error-------`);
                console.log(err);
                console.log(`----------END------------`);
            });
    }

    this.copy = copy;
}
CopyafterbuildPlugin.prototype.apply = function(compiler) {
    const afterEmit = (compilation, cb) => {
        this.copy();
        cb();
    };
    if (compiler.hooks) {
        var plugin = { name: 'Copyafterbuild' };
        compiler.hooks.afterEmit.tapAsync(plugin, afterEmit);
    } else {
        compiler.plugin('after-emit', afterEmit);
    }
}

module.exports = CopyafterbuildPlugin;

/** test without webpack
var cfb = new CopyafterbuildPlugin({
    from:path.resolve(__dirname, '../dist'),
    to: path.resolve(__dirname, '../../')
});
cfb.apply({plugin: (event, cf) => {
    if (event == 'afterEmit') {
        cf();
    }
}});
**/