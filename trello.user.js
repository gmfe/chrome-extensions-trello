function showMember () {
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

    const whoMap = {}
    json.members.forEach(item => {
      whoMap[item.id] = {
        name: item.initials,
        cards: [],
        idListName: ''
      }
    })
    const list = json.cards.forEach((item) => {
      item.idMembers.forEach(v => {
        const listName = listMap[item.idList]

        if (kanban === '6AofN7n8') {
          if (listName === '待整理排期') {
            return
          }
        }

        whoMap[v].cards.push({
          listName,
          name: item.name
        })
      })
    })

    console.log(whoMap)

    const $board = document.getElementById('board')
    if (!$board) {
      return
    }

    for (const key in whoMap) {
      const item = whoMap[key]

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
}

function showBtn () {
  const $headerBtn = document.querySelector('.board-header-btns.mod-right')

  if (!$headerBtn) {
    return
  }

  const a = document.createElement('a')
  a.className = 'board-header-btn'
  a.href = 'javascript:;'
  a.onclick = showMember
  a.innerHTML = '<span class="board-header-btn-text u-text-underline">按人分</span>'

  $headerBtn.insertBefore(a, $headerBtn.firstChild)
}

setTimeout(() => {
  showBtn()
}, 2000)
