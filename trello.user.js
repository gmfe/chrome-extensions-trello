const feMembers = [
  '5c3befb964fa77759cd4800a', // 何勇
  '5c383a25cebb4e2d365cef17', // 易勇

  '5c383e00c65db735936ad13e', // 夕明
  '5c383af1ad492e4dc76d1707', // 伟强

  '5c3b6c3490a10854cee9db3a', // 贵松
  '5b3e3670b5d7c64ee69fe696', // 星姿
  '5cb3f935ea5d1447df20f579', // 美梅

  '5c38355dbfb46b278c24dca6', // 超明
  '5c383a92812897267da2151b', // 志邦
  '5c9b44b1e6a5b13f18c57ed8', // 桃春

  '5c3809966e8a670e8588cd38', // 敏怡
  '5c7c9f84a60b9374382f81d5', // 王彬
  '5cb3f6e31bce057e4d8c0073', // 单坤

  '5c3809f44d723c0cb5a916fb', // 雅堂
].reverse()

const productMembers = [
  '5c99d46d5c9331835bddf78c', // S
  '5cae9f845654d9105e053156', // 谢磊
  '5c3809bc596b6044cd908fdf', // 刘敏
  '5caea259a06229471ec336cd', // 薛帮顺
  '5caeaef3f176d809027a203c', // 远男
  '5cae9f30c163e114bf744fa4', // G
  '552b61ccf021c0cd25fa5829' // 吴运林
].reverse()

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
        name: item.initials,
        cards: [],
        idListName: ''
      }
    })
    json.cards.forEach((item) => {
      item.idMembers.forEach(v => {
        const listName = listMap[item.idList]

        if (kanban === '6AofN7n8') {
          if (listName === '待整理排期') {
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

    let members = json.members.map(m => m.id)

    console.log(members)

    if (kanban === '6AofN7n8' || kanban === 'j9BOQLmd') {
      if (team === '前端') {
        members = feMembers
      } else if (team === '产品') {
        members = productMembers
      } else {
        members = members.filter(m => !(feMembers.includes(m) || productMembers.includes(m)))
      }
    }

    members.forEach(member => {
      const item = whoCardMap[member]

      if (item) {
        const div = document.createElement('div')
        div.className = 'js-list list-wrapper'

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
					${card.listName}
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
  const $headerBtn = document.querySelector('.board-header-btns.mod-right')

  if (!$headerBtn) {
    return
  }

  const a = document.createElement('a')
  a.className = 'board-header-btn'
  a.href = 'javascript:;'
  a.style = {
    padding: '0px'
  }
  a.onclick = () => showMember(team)
  a.innerHTML = `<span class="board-header-btn-text u-text-underline">按${team}分</span>`

  $headerBtn.insertBefore(a, $headerBtn.firstChild)
}

setTimeout(() => {
  showBtn('前端')
  showBtn('后台')
  showBtn('产品')
}, 2000)
