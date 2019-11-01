const feMembers = [
  '5c383e00c65db735936ad13e', // 夕明
  '5c383af1ad492e4dc76d1707', // 伟强
  '5d634c23dad2954191ff4efd', // 仁文
  '5cfe39736d1ce40c4689b13e', // 学裕

  '5c3b6c3490a10854cee9db3a', // 贵松
  '5cb3f935ea5d1447df20f579', // 美梅
  '5dbbcfbc9ae5ab1ecd02c9b0', // 佳亮

  '5c38355dbfb46b278c24dca6', // 超明
  '5c9b44b1e6a5b13f18c57ed8', // 桃春
  '5d551b059114a2695622e81b', // 启武

  '5c3809966e8a670e8588cd38', // 敏怡
  '5c7c9f84a60b9374382f81d5', // 王彬
  '5d351d3f7d5f8a3703aa66bf', // 京杭
  '5caa9cda2a669386f5d1595e', // 俊泽

  '5c3809f44d723c0cb5a916fb', // 雅堂
].reverse()

const productMembers = [
  '5cae9f845654d9105e053156', // 谢磊
  '5c3809bc596b6044cd908fdf', // 刘敏
  '5caea259a06229471ec336cd', // 薛帮顺
  '5caeaef3f176d809027a203c', // 远男
  '5cae9f30c163e114bf744fa4', // G
  "5cefb99994f12d22c8282b71", // marina
  '5c99d46d5c9331835bddf78c', // seasonyuan
].reverse()

const testMembers = [
  '5b45cdd16e89e20ab4f07334', // 王苗
  '5b45c56046e17e8ed8e50d1f', // 李铭
  '5bbdb9c50d8320630a66f01c', // 李婷
  '5c3333987117ee14c6744bc5', // 杨金海
  '5cee35780adb7172e44ea14a', // 李春艳
  '5cee29746f79155d15a9e4da', // 刘静
  '5b45c6f034fa79b0a45ba513', // 周敏
]

const be1Members = [
  '5b6bb7007da2ec42fb400042', // 魏儒端
  "5d1c24a1c84f6c26855fca86", // 刘永福
  "5cee0f5951796108d7d0ab8b", // 何能华
  '5c3314d1b6a30a43d816805c', // 陈耿伟
  '5cee0308ef711551327ef5de', // 黄敏杰
]

const be2Members = [
  "5b88a11b1a41cb570b868556", // 林诗奎
  "5bbde74588b8686ddd651b5d", // 夏天浩
  '5c330b7f9cf13e140cf61286', // 潘飞雷
  '5ceeaba4dda8b489e67af02e', // 肖冬梅
  '5bc5ac817631a963e79a85fb', // 赖晓荣
  '5cee0302a50d2c88f4cc447b', // 钟智强
]

const be3Members = [
  '50dd635cd531437c43000f95', // 钟其灵
  "5bbeb1f797b2635c8687ff2f", // 孟祥瑞
  '5bab698c65cc993b562d0f9c', // 王玮
  '5c330b359aa94f840ed244fe', // 谷龙
  '5cee02bacc1a64279f69490a', // 陈伟
  '5bfb9378177a4f8afcc1d5ae', // 黄长新
  '5cee92f3e2d7e43ad241ffe4', // 朱俊俊
]

const beProjMembers = [
  '5b46a91152ee524314ccda14', // 张泽
  "5cee33231d34e35ab36fdc0c", // 温家锦
  '5cef3469c7b03c8ab3a8f49b', // 胡佩琳
  "5bbde72db40ca85e7a8a51ee", // 刘文峰
  '5b6bb7007da2ec42fb400042', // 魏儒端
  "5bbde74588b8686ddd651b5d", // 夏天浩
  '5bab698c65cc993b562d0f9c', // 王玮
  "5cee249e20bd6c7c310597e3", // 黄富军
]

function hideMember () {
  // 删除目前 DOM 中已存在的人员列表
  [...document.getElementsByClassName('js-list-gm-ext')].forEach(
    list => list.parentNode.removeChild(list)
  )
}

function showMember (team) {
  if (!window.location.href.includes('trello.com')) {
    return
  }

  const kanban = location.pathname.split('/')[2]

  const url = `https://trello.com/1/Boards/${kanban}?lists=open&list_fields=name%2Cclosed%2CidBoard%2Cpos%2Csubscribed%2Climits%2CcreationMethod%2CsoftLimit&cards=visible&card_attachments=cover&card_stickers=true&card_fields=badges%2Cclosed%2CdateLastActivity%2Cdesc%2CdescData%2Cdue%2CdueComplete%2CdueReminder%2CidAttachmentCover%2CidList%2CidBoard%2CidMembers%2CidShort%2CidLabels%2Climits%2Cname%2Cpos%2CshortUrl%2CshortLink%2Csubscribed%2Curl%2ClocationName%2Caddress%2Ccoordinates%2Clabels&card_checklists=none&members=all&member_fields=avatarHash%2Cbio%2CbioData%2Cconfirmed%2CfullName%2CidEnterprise%2CidMemberReferrer%2Cinitials%2CmemberType%2CnonPublic%2Cproducts%2Curl%2Cusername&membersInvited=all&membersInvited_fields=avatarHash%2Cbio%2CbioData%2Cconfirmed%2CfullName%2CidEnterprise%2CidMemberReferrer%2Cinitials%2CmemberType%2CnonPublic%2Cproducts%2Curl%2Cusername&memberships_orgMemberType=true&checklists=none&organization=true&organization_fields=name%2CdisplayName%2Cdesc%2CdescData%2Curl%2Cwebsite%2Cprefs%2Cmemberships%2ClogoHash%2Cproducts%2Climits%2CidEnterprise&organization_tags=true&organization_enterprise=true&organization_disable_mock=true&myPrefs=true&fields=name%2Cclosed%2CdateLastActivity%2CdateLastView%2CdatePluginDisable%2CidOrganization%2Cprefs%2CshortLink%2CshortUrl%2Curl%2CcreationMethod%2Cdesc%2CdescData%2CidTags%2Cinvitations%2Cinvited%2ClabelNames%2Climits%2Cmemberships%2CpowerUps%2Csubscribed`

  fetch(url).then(ret => ret.json()).then(json => {

    const listMap = {}
    json.lists.forEach(item => {
      listMap[item.id] = item.name
    })

    const whoCardMap = {}
    json.members.forEach(item => {
      whoCardMap[item.id] = {
        name: item.fullName,
        cards: [],
        idListName: ''
      }
    })
    json.cards.forEach((item) => {
      item.idMembers.forEach(v => {
        const listName = listMap[item.idList]

        if (kanban === '6AofN7n8') {
          if (listName === '双月排期') {
            return
          }
        }

        whoCardMap[v].cards.push({
          listName,
          name: item.name
        })
      })
    })

    const $board = document.getElementById('board')
    if (!$board) {
      return
    }

    console.log(json.members.map(m => `${m.id}: ${m.initials} ${m.fullName}`))

    let members = json.members.map(m => m.id)

    if (kanban === '6AofN7n8' || kanban === 'j9BOQLmd') {
      if (team === '前端') {
        members = feMembers
      } else if (team === '产品') {
        members = productMembers
      } else if (team === '测试') {
        members = testMembers
      } else if (team === '后台一组') {
        members = be1Members
      } else if (team === '后台二组') {
        members = be2Members
      } else if (team === '后台三组') {
        members = be3Members
      } else if (team === '后台工程线') {
        members = beProjMembers
      } else {
        members = members.filter(m => !(
          feMembers.includes(m)
          || productMembers.includes(m)
          || testMembers.includes(m)
          || be1Members.includes(m)
          || be2Members.includes(m)
          || be3Members.includes(m)
          || beProjMembers.includes(m)
        ))
      }
    }

    members.forEach(member => {
      const item = whoCardMap[member]

      if (item) {
        const div = document.createElement('div')
        div.className = 'js-list list-wrapper js-list-gm-ext'

        let temp = `
	<div class="list js-list-content">
		<div class="list-header js-list-header u-clearfix is-menu-shown">
			<textarea class="list-header-name mod-list-name js-list-name-input" spellcheck="false" dir="auto" maxlength="512" style="overflow: hidden; overflow-wrap: break-word; height: 28px;">
			${item.name}
			</textarea>
		</div>
		<div class="list-cards u-fancy-scrollbar u-clearfix js-list-cards js-sortable ui-sortable">
			${item.cards.map(card => {
          return `
			<a class="list-card js-member-droppable ui-droppable" href="javascript:;">
				<div class="list-card-details js-card-details">
					<span class="list-card-title js-card-name" dir="auto">
					  <span style="color: #5f9ea0;">${card.listName}</span>
					<br>
					${card.name}
					</span>
				</div>
			</a>
				`
        }).join('')}
		</div>
	</div>
`

        div.innerHTML = temp

        $board.insertBefore(div, $board.firstChild)
      }
    })
  })
}

function showBtn (team) {
  addBtn(`按${team}分`, () => {
    hideMember()
    showMember(team)
  })
}

function addBtn (text, onClick) {
  const $headerBtn = document.querySelector('.board-header-btns.mod-right')

  if (!$headerBtn) {
    return
  }

  const a = document.createElement('a')
  a.className = 'board-header-btn'
  a.href = 'javascript:;'
  a.style.padding = '0px'

  const removeClassRegex = /(?:\s|^)board-header-btn-enabled(?:\s|$)/;
  a.onclick = (event) => {
    [...document.getElementsByClassName('board-header-btn-enabled')].forEach(
      (ele) => ele.className=ele.className.replace(removeClassRegex,' ')
    )
    a.className += " board-header-btn-enabled"
    onClick(event)
  }
  a.innerHTML = `<span class="board-header-btn-text u-text-underline">${text}</span>`

  $headerBtn.insertBefore(a, $headerBtn.firstChild)
}

function insertCSS (cssString) {
  const style = window.document.createElement('style')
  style.appendChild(document.createTextNode(cssString))
  window.document.head.appendChild(style)
}

const cssStr = `
.custom-field-front-badges .badge-text{
  white-space: normal;
}

.custom-field-front-badges .badge{
  display: block;
}
`

function doSimple () {
  const simpleCssStr = `
.badges{
  display: none;
}
.js-card-labels{
  display: none;
}

`

  insertCSS(simpleCssStr)
}

if (localStorage.getItem('showSimple') === 'true') {
  doSimple()
}

function showSimple () {
  addBtn('简洁', () => {
    if (localStorage.getItem('showSimple') === 'true') {
      localStorage.setItem('showSimple', '')
      window.location.reload()
    } else {
      localStorage.setItem('showSimple', 'true')
      doSimple()
    }
  })
}

setTimeout(() => {
  showSimple()
  showBtn('未分配')
  showBtn('前端')
  showBtn('产品')
  showBtn('测试')
  showBtn('后台工程线')
  showBtn('后台三组')
  showBtn('后台二组')
  showBtn('后台一组')

  insertCSS(cssStr)
}, 2000)
